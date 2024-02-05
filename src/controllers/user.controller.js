import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend: u can also get that from postman
  const { fullname, email, username, password } = req.body;
  console.log("email", email);
  //check if all the entries are vaild means anyone of them isnt empty or not
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  //check if any of the user is not previously registered

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email name or username aready exists");
  }

  // check for avatar image and coverImage
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  //upload them to cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!avatar) {
    throw new ApiError(400, "Avatar image is required!");
  }

  // now create an object and make an entry in database

  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  ); // this is the check to confirm that user is made or not if not made then asynchandler function will reject the promise.

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user.");
  }

  // return the final resposne of user created and store in database

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User successfully registered"));
});

export { registerUser };

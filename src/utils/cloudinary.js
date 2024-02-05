import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// we are using this to upload the users data to a cloud so that w doesnt require that much space.

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//This configuration allows us to give the permission to upload our data to cloudinary

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    // console.log("File is uploaded on cloudinary", response.url);
    fs.unlinkSync(localFilePath);
    return response; //  this is the response that is appear to the user.
  } catch (error) {
    fs.unlinkSync(localFilePath); // this is used like if some error occurs then we unlink the file from the server so that server load must not increase
    return null;
  }
};

export { uploadOnCloudinary };

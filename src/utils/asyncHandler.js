// asyncHandler is a higher order function.
// import Promise from "mongoose";

// Method 2: Promise resolve reject method
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

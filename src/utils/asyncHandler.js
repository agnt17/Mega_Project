//asyncHandler is a higher order function.

// import { Promise } from "mongoose";

//method 1: try catch method
/*
const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      res.status(err.code || 500).json({
        success: false,
        message: err.message,
      });
    }
  }; // next is a flag variables which just passes the flag value to next middleware or finally till server.
}; // function is passed in inside a function

export { asyncHandler };
*/

// Method 2: Promise resolve reject method

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err));
  };
};

export { asyncHandler };

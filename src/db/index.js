import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR: ",error);
    process.exit(1); // this is used so as to forcefully terminate the node js process if it is 1 means error occured and if it 0 then means the task is successfully done.
  }
};

export default connectDB

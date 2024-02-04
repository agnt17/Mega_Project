
// for 1st method

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// this is the second approach
dotenv.config({
  path: "./env",
});

// now the connectDB() function will connect our app to mongodb but our server is not started yet.This is done using .then and .catch functionality
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Some error occurred!!`, error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is runnning at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Mongodb connection failed !!!!!`, error);
  });

//1st approach to connect the database
//we use IIFE approach as in this approach anything doesnot pollutes itself and whole file

/*

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERRR:", error);
      throw error;
    }); // this is done because in some cases db fails to connect due to many reasons so we generalize them.

    app.listen(process.env.PORT, () => {
      console.log(`Application is ruuning on port: ${process.env.PORT}`);
    }); // here database successfully get connected.
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
})();

*/

//2nd approach----> In this approach we will connect database by writing all content in a file inside a db folder and then importing it to this folder.

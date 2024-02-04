import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// now here we will control the incoming json so that it should not get crashed while data is coming.

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use({ cookieParser }); // this is done so that to apply crud operations on the cookies that are placed on the browser of the user.
export { app };

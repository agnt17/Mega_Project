import multer from "multer";

//Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. It is commonly used with Node.js and Express to handle file uploads in web applications.

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });

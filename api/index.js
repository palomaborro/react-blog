const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const authRoutes = require("./routes/authRoutes");
const usersRoutes = require("./routes/usersRoutes");
const postsRoutes = require("./routes/postsRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");

const DB_NAME = "Blog";
const URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const DB_URI = `${URI}`;

app.use(express.json());
require("dotenv").config();

mongoose
  .connect(DB_URI, {})
  .then(() => console.log(`Succesfully connected to ${DB_NAME}`))
  .catch((error) => console.error("Error connecting to DB", error));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File uploaded')
})

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/categories", categoriesRoutes);

app.listen("5000", () => {
  console.log("running");
});

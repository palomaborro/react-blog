const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const DB_NAME = 'PalomasBlog';
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_URI = `${URI}`;

mongoose
  .connect(DB_URI, {})
  .then(() => console.log(`Succesfully connected to ${DB_NAME}`))
  .catch((error) => console.error("Error connecting to DB", error));

app.listen('5000', () => {
    console.log('running')
})

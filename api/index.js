const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoutes');

const DB_NAME = 'Blog';
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_URI = `${URI}`;

app.use(express.json());
require('dotenv').config();

mongoose
  .connect(DB_URI, {})
  .then(() => console.log(`Succesfully connected to ${DB_NAME}`))
  .catch((error) => console.error("Error connecting to DB", error));

  app.use('/', authRoute);

app.listen('5000', () => {
    console.log('running')
})

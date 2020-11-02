//require packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//connection to localhost and predetermined port from heroku
const PORT = process.env.PORT || 3000;
//imports models and schemas for db
const db = require("./models");
//sets app to the express method
const app = express();
//calls the morgan pakages to use during development
app.use(logger("dev"));
//parses infor as a json 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//sets the static path to the public folder
// app.use(express.static("public"));
//creates the db to connect to and use 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

//starts the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
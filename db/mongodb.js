const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/test")
    .then(() => console.log("mongoConnect"));
};

module.exports = connectToDB;

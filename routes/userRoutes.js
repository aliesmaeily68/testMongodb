const express = require("express");
const connectToDB = require("./../db/mongodb");
const UserModel = require("./../models/User");
const userRoute = express.Router();

userRoute.post("/register", (req, res) => {
  let body = req.body;
  connectToDB();
  let newUser = new UserModel(body);
  newUser.save().then(() => {
    console.log("new user insert successfully");
  });
});

userRoute.get("/all", (req, res) => {
  connectToDB();
  UserModel.find({}).then((result) => res.send(result));
});

userRoute.delete("/remove/:userId", (req, res) => {
  connectToDB();
  let userdeletId = req.params.userId;
  UserModel.findByIdAndDelete(userdeletId).then((result) => {
    console.log(`user whit id=${userdeletId} deleted`);
    res.send(result);
  });
});

userRoute.put("/update/:userId", (req, res) => {
  connectToDB();
  let body = req.body;
  let userupdateId = req.params.userId;
  UserModel.findByIdAndUpdate(userupdateId, body).then((result) => {
    console.log(`user whit id=${userupdateId} update`);
    res.send("updating user true");
  });
});
module.exports = userRoute;

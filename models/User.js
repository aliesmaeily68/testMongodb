const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLenght: 3,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minLenght: 3,
    trim: true,
  },
});
let User = mongoose.model("Users", userSchema);
module.exports = User;

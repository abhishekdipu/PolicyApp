const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxlength: 256,
  },
  address: {
    type: String,
    maxlength: 256,
  },
  phoneNumber: {
    type: String,
    maxlength: 256,
  },
  state: {
    type: String,
    maxlength: 256,
  },
  zipCode: {
    type: String,
    maxlength: 256,
  },
  email: {
    type: String,
    maxlength: 256,
  },
  gender: {
    type: String,
    maxlength: 256,
  },
  userType: {
    type: String,
    maxlength: 256,
  },
});

//model
const User = mongoose.model("User", userSchema);

module.exports.User = User;
module.exports.userSchema = userSchema;

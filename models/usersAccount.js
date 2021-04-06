const mongoose = require("mongoose");

//schema
const accountSchema = new mongoose.Schema({
  accountName: {
    type: String,
    minlength: 2,
    maxlength: 256,
  },
});

//model
const UsersAccount = mongoose.model("UsersAccount", accountSchema);

module.exports.UsersAccount = UsersAccount;

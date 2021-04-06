const mongoose = require("mongoose");

//schema
const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    maxlength: 2000,
  },
  timeStamp: {
    type: Date,
  },
});

//model
const Message = mongoose.model("Message", messageSchema);

module.exports.Message = Message;

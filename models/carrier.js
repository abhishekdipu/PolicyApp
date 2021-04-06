const mongoose = require("mongoose");

//schema
const carrierSchema = new mongoose.Schema({
  companyName: {
    type: String,
    maxlength: 256,
  },
});

//model
const Carrier = mongoose.model("Carrier", carrierSchema);

module.exports.Carrier = Carrier;
module.exports.carrierSchema = carrierSchema;

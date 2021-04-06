const mongoose = require("mongoose");

//schema
const agentSchema = new mongoose.Schema({
  agentName: {
    type: String,
    minlength: 2,
    maxlength: 256,
  },
});

//model
const Agent = mongoose.model("Agent", agentSchema);

module.exports.Agent = Agent;

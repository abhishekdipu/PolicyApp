const mongoose = require("mongoose");
const { userSchema } = require("./user");
const { carrierSchema } = require("./carrier");

//schema
const policySchema = new mongoose.Schema({
  policyNumber: {
    type: String,
    maxlength: 256,
  },
  policyStartDate: {
    type: String,
    maxlength: 256,
  },
  policyEndDate: {
    type: String,
    maxlength: 256,
  },
  policyCategory: {
    type: String,
    maxlength: 256,
  },
  collectionId: {
    type: String,
    maxlength: 256,
  },
  companyCollectionId: {
    type: carrierSchema,
  },
  userId: {
    type: userSchema,
  },
  premiumAmount: {
    type: Number,
  },
});

//model
const Policy = mongoose.model("Policy", policySchema);

module.exports.Policy = Policy;

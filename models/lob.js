const mongoose = require("mongoose");

//schema
const LOBSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    minlength: 2,
    maxlength: 256,
  },
});

//model
const Category = mongoose.model("LOB", LOBSchema);

module.exports.Category = Category;

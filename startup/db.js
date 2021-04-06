const mongoose = require("mongoose");
const config = require("config");
const logger = require("../utilities/logger");

module.exports = function () {
  mongoose
    .connect(config.get("db"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => logger.info("Connected to mongodb..."));
};

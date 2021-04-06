require("express-async-errors"); // to handler express async errors
const error = require("../middleware/errorHandler/error");
const logger = require("../utilities/logger");
const cpuUtils = require("../middleware/utils/cpus");

module.exports = function (app) {
  //handle node sync exception
  process.on("uncaughtException", (ex) => {
    logger.error(ex.message);
  });

  //handle async node exception
  process.on("unhandledRejection", (ex) => {
    logger.error(ex.message);
  });

  //handle express sync error
  app.use(error);

  //handle cpu utilization
  app.use(cpuUtils);
};

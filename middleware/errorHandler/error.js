const logger = require("../../utilities/logger");

//built in error middleware for express sync error
module.exports = (err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send("Something went WRONG");
};

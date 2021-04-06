const osutils = require("os-utils");

//exit the process if cpu utilization is >70%
module.exports = (req, res, next) => {
  osutils.cpuUsage((utilization) => {
    console.log("CPU Usage (%): " + utilization);
    if (utilization > 0.7) {
      process.exit(1);
    }
  });
  next();
};

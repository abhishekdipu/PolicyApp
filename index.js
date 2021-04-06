require("dotenv").config(); //for env var setting
const express = require("express");
const cluser = require("cluster");
const os = require("os");
const logger = require("./utilities/logger");
const uploads = require("express-fileupload");
const cors = require("cors");

const cpusCount = os.cpus().length;

const app = express();
app.use(cors());
app.use(uploads());

require("./startup/handleAndLogErrors")(app);
require("./startup/db")(); //for db connection
require("./startup/routes")(app); //handeling routes
require("./startup/prodProtection")(app); //for securing routes and compress the request

const port = process.env.PORT || 7000;

if (cluser.isMaster) {
  for (let i = 0; i < cpusCount; i++) {
    cluser.fork();
  }
  cluser.on("exit", (worker, code, signal) => {
    logger.info(`worker process ${worker.process.pid} died`);
    worker.fork();
  });
} else {
  app.listen(port, () =>
    logger.info(
      `listening at post ${port} in process ${process.pid} in ENV : ${process.env.NODE_ENV}`
    )
  );
}

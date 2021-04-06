const express = require("express");

const uploads = require("../routes/uploads");
const policies = require("../routes/policies");
const timers = require("../routes/timers");

module.exports = (app) => {
  app.use(express.json()); //for handeling body (post/put)
  app.use("/api/upload", uploads);
  app.use("/api/policy", policies);
  app.use("/api/timer", timers);
};

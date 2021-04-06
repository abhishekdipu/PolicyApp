const express = require("express");
const router = express.Router();
const { saveMessageAtGivenTimeStamp } = require("../controller/timer");

router.post("/", saveMessageAtGivenTimeStamp);

module.exports = router;

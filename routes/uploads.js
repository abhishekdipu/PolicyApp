const express = require("express");
const { uploadPolicyFile } = require("../controller/uploads/uploads");

const router = express.Router();

router.post("/", uploadPolicyFile);

module.exports = router;

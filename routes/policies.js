const express = require("express");
const router = express.Router();

const {
  getPolicyByUsername,
  getAggrigatePolicyForAllUsers,
} = require("../controller/policy");

router.get("/:user", getPolicyByUsername);
router.get("/", getAggrigatePolicyForAllUsers);

module.exports = router;

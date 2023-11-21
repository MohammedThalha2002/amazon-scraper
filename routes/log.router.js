const express = require("express");
const router = express.Router();
const { postLog, getLogs } = require("../service/logs.service");
const checkUserRole = require("../middleware/checkUserRole");

router.post("/logs", checkUserRole, (req, res) => {
  getLogs(req, res);
});

router.post("/", checkUserRole, (req, res) => {
  postLog(req, res);
});

module.exports = router;

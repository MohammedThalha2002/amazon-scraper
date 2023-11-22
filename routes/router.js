const express = require("express");
const router = express.Router();
const { postLog } = require("../service/track.service");

router.post("/addtrack", async (req, res) => {
  postLog(req, res);
});

module.exports = router;

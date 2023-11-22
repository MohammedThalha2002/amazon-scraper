const express = require("express");
const router = express.Router();
const {
  getTrackDetails,
  postTrackDetails,
} = require("../service/track.service");

router.post("/addtrack", (req, res) => {
  postTrackDetails(req, res);
});

router.get("/get-track-deatils/:email", (req, res) => {
  getTrackDetails(req, res);
});

module.exports = router;

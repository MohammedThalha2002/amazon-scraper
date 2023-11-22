const express = require("express");
const router = express.Router();
const {
  getTrackDetails,
  postTrackDetails,
} = require("../service/track.service");

router.get("/track-details", (req, res) => {
  getTrackDetails(req, res);
});

router.post("/addtrack", (req, res) => {
  postTrackDetails(req, res);
});

router.get("/track-details/:email", (req, res) => {
  getTrackDetails(req, res);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getTrackDetails,
  postTrackDetails,
  updateTrackPrices,
} = require("../service/track.service");
const { checkUser } = require("../middleware/checkUser");

router.get("/", (req, res) => {
  res.send("Tracker runnning successfully");
});

router.post("/", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  console.log(req.params);
  res.send("Tracker runnning successfully");
});

router.get("/track-details", (req, res) => {
  getTrackDetails(req, res);
});

router.post("/addtrack", checkUser, (req, res) => {
  console.log(req.body); // email, url, price, id
  postTrackDetails(req, res);
});

router.get("/track-details/:email", (req, res) => {
  getTrackDetails(req, res);
});

router.get("/update-price/:email", (req, res) => {
  updateTrackPrices(req, res);
});

module.exports = router;

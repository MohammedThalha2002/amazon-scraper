const express = require("express");
const router = express.Router();
const {
  getTrackDetails,
  postTrackDetails,
  updateExpectedPrices,
  deleteTrack,
  getTrackDetailsById,
  enableTracking,
  disableTracking,
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

// GET ALL
router.get("/track-details", (req, res) => {
  getTrackDetails(req, res);
});

// GET
router.get("/track-details/:email", (req, res) => {
  getTrackDetails(req, res);
});

// GET by id
router.get("/track-details/id/:id", (req, res) => {
  getTrackDetailsById(req, res);
});

// POST
router.post("/addtrack", checkUser, (req, res) => {
  // console.log(req.body); // email, url, price, id
  postTrackDetails(req, res);
});

// UPDATE
router.put("/update-price/:id/:price", (req, res) => {
  updateExpectedPrices(req, res);
});

// UPDATE
router.put("/enable-tracking/:id", (req, res) => {
  enableTracking(req, res);
});

// UPDATE
router.put("/disable-tracking/:id", (req, res) => {
  disableTracking(req, res);
});

// DELETE
router.delete("/delete/:id", (req, res) => {
  deleteTrack(req, res);
});

module.exports = router;

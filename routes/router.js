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
  getAllTrackDetails,
  postTrackDetailsDirectly,
} = require("../service/track.service");
const { checkUser } = require("../middleware/checkUser");
const { createUser } = require("../service/authenticate.service");

// GET - ROOT TEST
router.get("/", (req, res) => {
  res.send("Tracker runnning successfully");
});

// POST - ROOT TEST
router.post("/", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  console.log(req.params);
  res.send("Tracker runnning successfully");
});

// GET ALL
router.get("/track-details", (req, res) => {
  getAllTrackDetails(req, res);
});

// GET ALL BY EMAIL
router.get("/track-details/:email", (req, res) => {
  getAllTrackDetails(req, res);
});

// GET BY EMAIL AND PAGE
router.get("/track-details/:email/:page", (req, res) => {
  getTrackDetails(req, res);
});

// GET BY ID
router.get("/track-detail-by-id/:id", (req, res) => {
  console.log("GETTING BY ID");
  getTrackDetailsById(req, res);
});

// authenticate
router.post("/login", (req, res) => {
  // body -> email, token, userId
  createUser(req, res);
});

// authenticate
router.get("/chech-auth/:email", (req, res) => {
  // body -> email,
  createUser(req, res);
});

// POST
router.post("/addtrack", checkUser, (req, res) => {
  // console.log(req.body); // email, url, price, id
  postTrackDetails(req, res);
});

// POST
router.post("/addtrack-direct", checkUser, (req, res) => {
  // console.log(req.body); // email, url, price, id
  postTrackDetailsDirectly(req, res);
});

// UPDATE
router.put("/update-price/:id/:price", (req, res) => {
  updateExpectedPrices(req, res);
});

// UPDATE - ENABLE TRACKING
router.put("/enable-tracking/:id", (req, res) => {
  enableTracking(req, res);
});

// UPDATE - DISABLE TRACKING
router.put("/disable-tracking/:id", (req, res) => {
  disableTracking(req, res);
});

// DELETE
router.delete("/delete/:id", (req, res) => {
  deleteTrack(req, res);
});

module.exports = router;

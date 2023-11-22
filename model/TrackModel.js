const mongoose = require("mongoose");

const TrackSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Track = mongoose.model("Track", TrackSchema);

module.exports = Track;

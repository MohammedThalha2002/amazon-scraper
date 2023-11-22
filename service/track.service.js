const TrackModel = require("../model/TrackModel");

const postLog = async (req, res) => {
  const track = new TrackModel(req.body);
  try {
    await track.save();
    res.send(track);
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Failed to upload the tracking data", error: error });
  }
};

module.exports = { postLog };

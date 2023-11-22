const TrackModel = require("../model/TrackModel");

const postTrackDetails = async (req, res) => {
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

const getTrackDetails = async (req, res) => {
  const email = req.params?.email;

  if (email) {
    try {
      const details = await TrackModel.find({
        email: email,
      });
      res.send(details);
    } catch (error) {
      res
        .status(400)
        .json({ msg: "Failed to fetch the tracking data", error: error });
    }
  } else {
    try {
      const details = await TrackModel.find({});
      res.send(details);
    } catch (error) {
      res
        .status(400)
        .json({ msg: "Failed to fetch the tracking data", error: error });
    }
  }
};

const updateTrackPrices = async (req, res) => {
  const email = req.params?.email;

  try {
    const details = await TrackModel.find({
      email: email,
    });
    for (const detail of details) {
      console.log(detail);
    }
    res.send(details);
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Failed to fetch the tracking data", error: error });
  }
};

module.exports = { postTrackDetails, getTrackDetails, updateTrackPrices };

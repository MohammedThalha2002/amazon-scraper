const TrackModel = require("../model/TrackModel");
const scrape = require("./scrape.service");

const postTrackDetails = async (req, res) => {
  let url = req.body.url;
  let email = req.body.email;
  let exp_price = req.body.exp_price;

  try {
    await scrape(url, email, exp_price);
    res
      .status(200)
      .json({ msg: "Tracking data uploaded successfully", status: "success" });
  } catch (error) {
    res.status(400).json({
      msg: "Failed to upload the tracking data",
      error: error,
      staus: "failed",
    });
  };
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
      res.status(400).json({
        msg: "Failed to fetch the tracking data",
        error: error,
      });
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

const updateExpectedPrices = async (req, res) => {
  const id = req.params?.id;
  const exp_price = parseInt(req.params?.price);

  try {
    await TrackModel.findByIdAndUpdate(id, {
      $set: {
        exp_price: exp_price,
      },
    });
    console.log(exp_price, "updated successfully");
    res
      .status(200)
      .json({ msg: "Price updated successfully", status: "success" });
  } catch (error) {
    res.status(400).json({
      msg: "Failed to update the tracking data",
      error: error,
      staus: "failed",
    });
  }
};

const deleteTrack = async (req, res) => {
  const id = req.params?.id;

  try {
    await TrackModel.deleteOne({ _id: id });
    console.log("Deleted successfully");
    res
      .status(200)
      .json({ msg: "Product Deleted successfully", status: "success" });
  } catch (error) {
    res.status(400).json({
      msg: "Failed to delete the tracking data",
      error: error,
      staus: "failed",
    });
  }
};

module.exports = {
  postTrackDetails,
  getTrackDetails,
  updateExpectedPrices,
  deleteTrack,
};

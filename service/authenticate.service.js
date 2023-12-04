const UserModel = require("../model/UserModel");

const createUser = async (req, res) => {
  const email = req.body.email;
  let user = await UserModel.find({
    email: email,
  });

  if (user.length > 0) {
    // update the token and userId
    let id = user[0]._id;
    const token = req.body.token;
    const userId = req.body.userId;
    try {
      await UserModel.findByIdAndUpdate(id, {
        $set: {
          token: token,
          userId: userId,
        },
      });
      res
        .status(200)
        .json({ msg: "Token updated successfully", status: "success" });
    } catch (error) {
      res.status(400).json({
        msg: "Failed to update user",
        error: error,
        status: "failed",
      });
    }
  } else {
    // create new user
    const newUser = req.body;
    try {
      user = new UserModel(newUser);
      await user.save();
      res.status(200).json({
        msg: "User registered successfully",
        status: "success",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        msg: "Failed to register user",
        error: error,
        status: "failed",
      });
    }
  }
};

const chechAuth = async (req, res) => {
  const email = req.params.email;
  let user = await UserModel.find({
    email: email,
  });

  if (user.length > 0) {
    // user exists
    res.status(200).json({
      status: "success",
    });
  } else {
    res.status(200).json({
      status: "failed",
    });
  }
};

module.exports = { createUser };

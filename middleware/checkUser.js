const UserModel = require("../model/UserModel");

async function checkUser(req, res, next) {
  // console.log(req.body);
  const email = req.body.email;
  const user = await UserModel.find({
    email: email,
  });
  // console.log(user);

  if (user.length > 0) {
    console.log("User already exixts");
    next();
  } else {
    let newUser = {
      email: email,
      userId: req.body.userId,
      token: req.headers.token,
    };
    await registerUser(newUser, res, next);
  }
}

async function registerUser(newUser, res, next) {
  try {
    const user = new UserModel(newUser);
    await user.save();
    console.log("New user created");
    next();
  } catch (error) {
    res.status(400).json({
      msg: "Failed to register user",
      error: error,
      staus: "failed",
    });
  }
}

module.exports = { checkUser };

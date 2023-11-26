const UserModel = require("../model/UserModel");

async function checkUser(req, res, next) {
  const email = req.header.email;
  console.log(email);

  const user = await UserModel.find({
    email: email,
  });

  if (user) {
    next();
  } else {
    await registerUser(req.header, res).then(() => next());
  }
}

async function registerUser(user, res) {
  const user = new UserModel(user);
  try {
    await user.save();
  } catch (error) {
    res.status(400).json({
      msg: "Failed to register user",
      error: error,
      staus: "failed",
    });
  }
}

const UserModel = require("../model/UserModel");

async function checkUser(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await UserModel.find({
    email: email,
  });
  // console.log(user);

  if (user.length > 0) {
    console.log("User already exixts");
    if(user[0].token == ""){
      res.status(400).json({
        msg: "Authenticate",
        error: error,
        staus: "failed",
      });
    }
    next();
  } else {
    let newUser = {
      email: email,
      password: password,
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

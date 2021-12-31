var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var User = require("../models/user");
require("dotenv").config();

router.post("/register", async function (req, res, next) {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user with email already exixt");
  user = new User(req.body);
  await user.save();
  return res.status(200).send(user);
});

router.post("/login", async function (req, res, next) {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("user with this email not register");

  if (user.password != req.body.password)
    return res.status(400).send("password incorrect");

  const token = jwt.sign(
    { _id: user._id },
    process.env.JWTKEY || "mysecretkey"
  );

  return res.status(200).send({ user, token: token, role: user.role.type });
});

module.exports = router;

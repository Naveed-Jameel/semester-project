const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");
// authentication login
module.exports = async (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, process.env.JWTKEY || "mysecretkey");
    req.user = decoded;
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(400).send("Invalid token: User Dont exist");
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong at server");
  }
};

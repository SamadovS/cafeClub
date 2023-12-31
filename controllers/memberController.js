const Member = require("../models/Member");
let memberController = module.exports;

memberController.home = (req, res) => {
  console.log("GET: cont/home");

  res.send("You are in Home Page");
};

memberController.signup = (req, res) => {
  console.log("POST: cont/signup");

  res.send("You are in Signup Page");
};

memberController.login = (req, res) => {
  console.log("POST: cont/login");

  res.send("You are in Login Page");
};

memberController.logout = (req, res) => {
  console.log("GET: cont/logout");

  res.send("You are in Logout Page");
};

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.json("User already exists");
    } else {
      bcrypt.hash(password, 10).then((result) => {
        if (!result) {
          return res.json("An error occurred");
        }
        user = new User({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: result,
        });
        user.save();
        return res.json({ user });
      });
    }
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.json("Username and password wrong");
    } else {
      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          return res.json({ user });
        } else {
          return res.json("Login Error");
        }
      });
    }
  });
};

const forgetPassword = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.json("Username does not exist");
    } else {
      bcrypt.hash(password, 10).then((result) => {
        if (!result) {
          return res.json("An error occurred");
        } else {
          User.updateOne({ email: email }, { password: result }).then(
            (result) => {
              console.log(result);
              return res.json("Password change successfully");
            }
          );
        }
      });
    }
  });
};

module.exports = { createUser, loginUser, forgetPassword };

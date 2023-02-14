const express = require("express");
const userController = require("../controllers/userController");
const route = express.Router();

route.post("/create", userController.createUser);
route.post("/login", userController.loginUser);
route.post("/forgetpassword", userController.forgetPassword);

module.exports = route;

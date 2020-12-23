const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");
//Importing UserController
const userController = require("../controller/userController");

//Route for User Signup
router.post("/userSignup", userController.userSignup);

//Route for User Login
router.post("/userLogin", userController.userLogin);

//Route to update user Details
router.patch("/userUpdate/:email", auth, userController.userUpdate);

//Route for Deleting User Account and his belonging Products
router.delete("/userDelete", auth, userController.userDelete);

module.exports = router;

const express = require("express");
const router = express.Router();
const signUpCtrl = require("../controllers/userCtrl");

router.post("/Signup", signUpCtrl.usersignup);

module.exports = router;

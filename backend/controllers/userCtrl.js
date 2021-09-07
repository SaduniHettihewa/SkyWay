const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");

exports.usersignup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "The email already exists." });

    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password must at least 6 characters long." });

    // Password Encryption
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: passwordHash,
    });
    console.log("success");
    res.status(200).json({ msg: "SignUp Success" });
    // Save mongodb
    await newUser.save();
  } catch (error) {
    console.log("signupController error: ", error);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

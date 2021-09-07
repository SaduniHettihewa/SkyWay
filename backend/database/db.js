const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://threebitz:threebitz@skyway.3g3q8.mongodb.net/skyway?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database connection Success!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
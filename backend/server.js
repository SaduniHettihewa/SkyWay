const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./database/db");

const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("inside server");
});

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

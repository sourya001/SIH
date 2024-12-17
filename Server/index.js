const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Sih fetching", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get("/getUsers", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => {
      res.json({ message: err });
    });
});

app.listen(5000, () => {
  console.log("Server is running");
});

const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const route = require("./Route");
const dbconnect = require("./config/db");
dbconnect();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(cors());
app.use(route);

app.post("/", (req, res) => {
  res.send("home");
});

app.listen(PORT, () => {
  console.log(`server is running port number ${PORT}`);
});

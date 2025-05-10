const { default: mongoose } = require("mongoose");

function dbconnect() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database is Connected");
    })
    .catch((err) => {
      console.log("err");
    });
}

module.exports = dbconnect;

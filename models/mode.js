const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/muldata")
  .then(() => {
    console.log("Connected Mongo");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
userSchema = new mongoose.Schema({
  name: String,
  file: String,
});

module.exports = mongoose.model("User", userSchema);
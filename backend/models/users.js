const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  firstname: { type: String, require: false },
  lastname: { type: String, require: false },
  team: { type: String, require: false },
  country: { type: String, require: false },
  imageprofile: { type: Object, require: false },
  userId: { type: String, require: true },
});

module.exports = mongoose.model("Users", usersSchema);

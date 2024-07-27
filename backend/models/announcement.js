const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  team: { type: String, required: true },
  description: { type: String, required: true },
  country: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Announcement", announcementSchema);

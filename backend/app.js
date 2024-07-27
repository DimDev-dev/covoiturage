const express = require("express");
const mongoose = require("mongoose");
const announcementRoutes = require("./routes/announcement");
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors());

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/announcement", announcementRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
module.exports = app;

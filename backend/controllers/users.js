const Users = require("../models/users");

exports.getAllUsers = (req, res, next) => {
  Users.find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.createUsers = async (req, res) => {
  const { userId, ...usersData } = req.body;

  try {
    const existingProfile = await Users.findOne({ userId });

    if (existingProfile) {
      return res
        .status(400)
        .json({ message: "Un profil existe déjà pour cet utilisateur." });
    }

    const newProfile = new Users({
      userId: req.userId,
      ...usersData,
    });

    await newProfile.save();

    res.status(201).json({ message: "Profil créé avec succès." });
  } catch (error) {
    console.error("Erreur lors de la création du profil :", error);
    res.status(500).json({ message: "Erreur lors de la création du profil." });
  }
};

exports.getOneUsers = (req, res) => {
  Users.findOne({
    userId: req.params.userId,
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyUsers = (req, res) => {
  const { userId, ...usersData } = req.body;
  console.log("User ID to update:", req.params.userId); // Log the user ID
  console.log("Data to update:", usersData); // Log the data to update

  Users.findOneAndUpdate({ userId: req.params.userId }, usersData, {
    new: true,
    runValidators: true,
  })
    .then((updatedUser) => {
      if (updatedUser) {
        console.log("Updated user:", updatedUser); // Log the updated user
        res.status(200).json({
          message: "User updated successfully!",
          user: updatedUser,
        });
      } else {
        res.status(400).json({
          message: "No changes made to the user.",
        });
      }
    })
    .catch((error) => {
      console.error("Error during update:", error); // Log the error
      res.status(400).json({ error: error });
    });
};

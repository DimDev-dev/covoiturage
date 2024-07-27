const Annonces = require("../models/announcement");

exports.createAnnonce = (req, res, next) => {
  const { userId, ...announcementData } = req.body;

  const thing = new Annonces({
    ...announcementData,
    userId: req.userId, // Utiliser req.userId récupéré par le middleware d'authentification
  });
  thing
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

//! avec image --debut--
// exports.createThing = (req, res, next) => {
//   const thingObject = JSON.parse(req.body.thing);
//   delete thingObject._id;
//   delete thingObject._userId;
//   const thing = new Thing({
//     ...thingObject,
//     userId: req.auth.userId,
//     imageUrl: `${req.protocol}://${req.get("host")}/images/${
//       req.file.filename
//     }`,
//   });
//   thing
//     .save()
//     .then(() => {
//       res.status(201).json({ message: "Objet enregistré !" });
//     })
//     .catch((error) => {
//       res.status(400).json({ error });
//     });
// };
//! --fin--
exports.getOneAnnonce = (req, res, next) => {
  Annonces.findOne({
    _id: req.params.id,
  })
    .then((thing) => {
      res.status(200).json(thing);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyAnnonce = (req, res, next) => {
  const { userId, ...announcementData } = req.body;

  Annonces.updateOne({ _id: req.params.id }, announcementData)
    .then(() => {
      res.status(201).json({
        message: "Thing updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error + "erreur coter serveur",
      });
    });
};

exports.deleteAnnonce = (req, res, next) => {
  Annonces.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllAnnonce = (req, res, next) => {
  Annonces.find()
    .then((things) => {
      res.status(200).json(things);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

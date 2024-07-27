const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const annonceCtrl = require("../controllers/announcement");
const multer = require("../middleware/multer-config");

router.get("/", annonceCtrl.getAllAnnonce);
router.post("/", auth, multer, annonceCtrl.createAnnonce);
router.get("/:id", auth, annonceCtrl.getOneAnnonce);
router.put("/:id", auth, multer, annonceCtrl.modifyAnnonce);
router.delete("/:id", auth, annonceCtrl.deleteAnnonce);

module.exports = router;

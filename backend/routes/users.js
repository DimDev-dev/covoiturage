const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const usersCtrl = require("../controllers/users");

router.get("/", usersCtrl.getAllUsers);
router.post("/", usersCtrl.createUsers);
router.get("/:userId", usersCtrl.getOneUsers);
router.put("/:userId", usersCtrl.modifyUsers);
// router.delete("/:id", usersCtrl.deleteUsers);

module.exports = router;

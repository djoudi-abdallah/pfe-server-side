// router.js
const express = require("express");
const contacteController = require("../controller/contacteController");
const authMiddleware = require("../midllweare/authmidllwaere");
const adminMiddleware = require("../midllweare/adminmidllwear");
const router = express.Router();

router.post("/", authMiddleware, contacteController.createContacte);
router.get("/", adminMiddleware, contacteController.getContactes);
router.get("/:id", authMiddleware, contacteController.getContacteById);
router.put("/:id", authMiddleware, contacteController.updateContacte);
router.delete("/:id", authMiddleware, contacteController.deleteContacte);

module.exports = router;

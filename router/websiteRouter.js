// router.js
const express = require("express");
const websitecontroller = require("../controller/websiteController");

const router = express.Router();

router.post("/", websitecontroller.createWebsite);
router.get("/", websitecontroller.getWebsites);
router.get("/:id", websitecontroller.getWebsiteById);
router.put("/:id", websitecontroller.updateWebsite);
router.delete("/:id", websitecontroller.deleteWebsite);

module.exports = router;

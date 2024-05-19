// router.js
const express = require("express");
const dashboardcController = require("../controller/dashboardController");
const adminmidllwear = require("../midllweare/adminmidllwear");

const router = express.Router();

router.get(
  "/productparsite",
  adminmidllwear,
  dashboardcController.getProductPercentageByWebsite
);
router.get("/users-count", adminmidllwear, countUsers);
module.exports = router;

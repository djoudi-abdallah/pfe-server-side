// router.js
const express = require("express");
const notificationcontroller = require("../controller/notificationController");
const authMiddleware = require("../midllweare/authmidllwaere");
const router = express.Router();

router.post("/", authMiddleware, notificationcontroller.createNotification);
router.get("/", authMiddleware, notificationcontroller.getNotifications);
router.get("/:id", authMiddleware, notificationcontroller.getNotificationById);
router.put("/:id", authMiddleware, notificationcontroller.updateNotification);
router.delete(
  "/:id",
  authMiddleware,
  notificationcontroller.deleteNotification
);

module.exports = router;

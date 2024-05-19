// controller.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createNotification = async (req, res) => {
  const { contenue } = req.body;
  const userId = req.user.userId; // Extracted from the token

  try {
    const notification = await prisma.notification.create({
      data: {
        contenue,
        userId,
      },
    });
    res.status(201).json(notification);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la création de la notification" });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany();
    res.status(200).json(notifications);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des notifications" });
  }
};

exports.getNotificationById = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await prisma.notification.findUnique({
      where: { notification_id: parseInt(id) },
    });
    if (!notification) {
      return res.status(404).json({ error: "Notification non trouvée" });
    }
    res.status(200).json(notification);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de la notification" });
  }
};

exports.updateNotification = async (req, res) => {
  const { id } = req.params;
  const { contenue } = req.body;
  const userId = req.user.userId; // Extracted from the token

  try {
    const notification = await prisma.notification.update({
      where: { notification_id: parseInt(id) },
      data: { contenue, userId },
    });
    res.status(200).json(notification);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de la notification" });
  }
};

exports.deleteNotification = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.notification.delete({
      where: { notification_id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression de la notification" });
  }
};

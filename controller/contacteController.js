// controller.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createContacte = async (req, res) => {
  const { commentaire } = req.body;
  const userId = req.user.userId; // Extracted from the token

  try {
    const contacte = await prisma.contacte.create({
      data: {
        commentaire,
        userId,
      },
    });
    res.status(201).json(contacte);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du contact" });
  }
};

exports.getContactes = async (req, res) => {
  try {
    const contactes = await prisma.contacte.findMany();
    res.status(200).json(contactes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des contacts" });
  }
};

exports.getContacteById = async (req, res) => {
  const { id } = req.params;
  try {
    const contacte = await prisma.contacte.findUnique({
      where: { contacte_id: parseInt(id) },
    });
    if (!contacte) {
      return res.status(404).json({ error: "Contact non trouvé" });
    }
    res.status(200).json(contacte);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération du contact" });
  }
};

exports.updateContacte = async (req, res) => {
  const { id } = req.params;
  const { commentaire } = req.body;
  const userId = req.user.userId; // Extracted from the token

  try {
    const contacte = await prisma.contacte.update({
      where: { contacte_id: parseInt(id) },
      data: { commentaire, userId },
    });
    res.status(200).json(contacte);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour du contact" });
  }
};

exports.deleteContacte = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.contacte.delete({
      where: { contacte_id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression du contact" });
  }
};

// controller.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createWebsite = async (req, res) => {
  const { websitename } = req.body;
  try {
    const website = await prisma.website.create({
      data: {
        websitename,
      },
    });
    res.status(201).json(website);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du site web" });
  }
};

exports.getWebsites = async (req, res) => {
  try {
    const websites = await prisma.website.findMany();
    res.status(200).json(websites);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des sites web" });
  }
};

exports.getWebsiteById = async (req, res) => {
  const { id } = req.params;
  try {
    const website = await prisma.website.findUnique({
      where: { website_id: parseInt(id) },
    });
    if (!website) {
      return res.status(404).json({ error: "Site web non trouvé" });
    }
    res.status(200).json(website);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération du site web" });
  }
};

exports.updateWebsite = async (req, res) => {
  const { id } = req.params;
  const { websitename } = req.body;
  try {
    const website = await prisma.website.update({
      where: { website_id: parseInt(id) },
      data: { websitename },
    });
    res.status(200).json(website);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour du site web" });
  }
};

exports.deleteWebsite = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.website.delete({
      where: { website_id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression du site web" });
  }
};

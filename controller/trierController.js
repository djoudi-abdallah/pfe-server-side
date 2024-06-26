// Controller function to retrieve products with sectionName "man"
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getProductsmen = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        sectionName: "man",
      },
    });
    res.json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getProductswomen = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        sectionName: "women",
      },
    });
    res.json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getProductschildren = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        sectionName: {
          equals: sectionName,
          mode: "insensitive", // Recherche insensible à la casse
        },
      },
    });
    res.json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getProductsByPrice = async (req, res) => {
  try {
    const { price } = req.body; // Assuming price is provided in the request body
    const products = await prisma.product.findMany({
      where: {
        price: Number(price) || 0, // Filtering products based on the provided price
      },
    });
    res.json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

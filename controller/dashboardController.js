const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getProductPercentageByWebsite = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { website: true },
    });

    const totalProducts = products.length;
    if (totalProducts === 0) {
      return res.status(200).json(["Aucun produit trouvé"]);
    }

    const productCounts = products.reduce((acc, product) => {
      const websiteName = product.website.websitename;
      if (!acc[websiteName]) {
        acc[websiteName] = 0;
      }
      acc[websiteName]++;
      return acc;
    }, {});

    const percentages = Object.keys(productCounts).map((website) => {
      const count = productCounts[website];
      return [website, ((count / totalProducts) * 100).toFixed(2) + "%"];
    });

    res.status(200).json(percentages);
  } catch (error) {
    res
      .status(500)
      .json([
        "Erreur lors du calcul des pourcentages des produits par site web",
      ]);
  }
};

exports.countUsers = async (req, res) => {
  try {
    const userCount = await prisma.user.count();
    res.status(200).json({ count: userCount });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors du comptage des utilisateurs" });
  }
};

// prismaClient.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  // Check if the action is deleting a website
  if (params.model === "Website" && params.action === "delete") {
    const websiteId = params.args.where.website_id;

    // Retrieve all products related to the website
    const products = await prisma.product.findMany({
      where: { websiteId: websiteId },
    });

    // Create a notification for each product
    for (const product of products) {
      await prisma.notification.create({
        data: {
          message: `Product "${product.name}" is affected by the removal of website "${websiteId}"`,
          productId: product.product_id,
        },
      });
    }
  }

  // Proceed with the next middleware or the actual operation
  return next(params);
});

module.exports = prisma;

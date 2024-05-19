const express = require("express");
const productRouter = require("./router/ProductRouter");
const userRoutes = require("./router/UserRouter");
const trierRouter = require("./router/trierRouter");
const favorisRouter = require("./router/favorisRouter");
const contacteRouter = require("./router/contacteRouter");
const notificationRouter = require("./router/notificationRouter");
const websiteRouter = require("./router/websiteRouter");
const dashboardRouter = require("./router/dashboardRouter");
const app = express();

app.use(express.json());

// Use the product router
app.use("/products", productRouter);
app.use("/users", userRoutes);
app.use("/trier", trierRouter);
app.use("/favoris", favorisRouter);
app.use("/contactes", contacteRouter);
app.use("/notifications", notificationRouter);
app.use("/websites", websiteRouter);
app.use("/dashboard", dashboardRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

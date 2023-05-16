const featuredProductsRouter = require("./featuredProducts");
const siteRouter = require("./site");

function route(app) {
  app.use("/featured-products", featuredProductsRouter);
  app.use("/", siteRouter);
}

module.exports = route;

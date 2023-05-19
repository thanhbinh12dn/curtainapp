const featuredProductsRouter = require("./featuredProducts");
const productsDetailRouter = require("./productsDetail");
const siteRouter = require("./site");
const adminRouter = require("./admin");

function route(app) {
  app.use("/admin", adminRouter);
  app.use("/products-detail", productsDetailRouter);
  app.use("/featured-products", featuredProductsRouter);
  app.use("/", siteRouter);
}

module.exports = route;

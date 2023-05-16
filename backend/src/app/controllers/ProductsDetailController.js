const FeaturedProduct = require("../models/FeaturedProduct");
const { mongooseToObject } = require("../../utils/mongoose");

class ProductsDetailController {
  //[GET] /:slug
  index(req, res, next) {
    FeaturedProduct.findOne({ slug: req.params.slug })
      .then((slug) => {
        res.json(slug);
      })
      .catch(next);
  }
}

module.exports = new ProductsDetailController();

const FeaturedProduct = require("../models/FeaturedProduct");

class FeaturedProductController {
  //[GET] /featured-products
  index(req, res, next) {
    let limit = req.query.limit;
    let page = req.query.page;
    if (page) {
      //get page
      limit = parseInt(limit);
      page = parseInt(page);

      if (page < 1) {
        page = 1;
      }
      let soLuongGioiHan = limit;
      let soLuongBoQua = (page - 1) * limit;

      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      FeaturedProduct.find({})
        .skip(soLuongBoQua)
        .limit(soLuongGioiHan)
        .then((featuredProduct) => {
          res.json(featuredProduct);
        })
        .catch(next);
    } else {
      //Get all
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      FeaturedProduct.find({})
        .then((featuredProduct) => {
          res.json(featuredProduct);
        })
        .catch(next);
      // res.render("featured-products");
    }
  }
}

module.exports = new FeaturedProductController();

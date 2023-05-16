const FeaturedProducts = require("../models/FeaturedProduct");

class SiteController {
  //[GET] /
  index(req, res, next) {
    FeaturedProducts.find({})
      .then((courses) => {
        res.json(courses);
      })
      .catch(next);
    // res.send("home");
  }

  //[GET] /search
  search(req, res) {
    res.send("search");
  }
}

module.exports = new SiteController();

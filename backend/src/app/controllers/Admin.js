const Admin = require("../models/Admin");

class AdminController {
  //[GET] /admin/login
  index(req, res, next) {
    const { email, password } = req.body;

    Admin.findOne({ email: email })
      .then((data) => {
        res.json(data);
      })
      .catch(next);
    // FeaturedProduct.findOne({ slug: req.params.slug })
    //   .then((slug) => {
    //     res.json(slug);
    //   })
    //   .catch(next);
  }
}

module.exports = new AdminController();

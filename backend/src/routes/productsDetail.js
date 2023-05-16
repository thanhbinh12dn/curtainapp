const express = require("express");
const router = express.Router();

const productsDetailController = require("../app/controllers/ProductsDetailController");

router.get("/:slug", productsDetailController.index);

module.exports = router;

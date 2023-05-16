const express = require("express");
const router = express.Router();

const featuredProductController = require("../app/controllers/FeaturedProductController");

router.get("/", featuredProductController.index);

module.exports = router;

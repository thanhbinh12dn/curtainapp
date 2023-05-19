const express = require("express");
const router = express.Router();

const featuredProductController = require("../app/controllers/FeaturedProductController");

router.post("/store", featuredProductController.store);
router.get("/", featuredProductController.index);

module.exports = router;

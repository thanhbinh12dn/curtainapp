const express = require("express");
const router = express.Router();

const featuredProductController = require("../app/controllers/FeaturedProductController");

router.post("/store", featuredProductController.store);
router.get("/:id/edit", featuredProductController.edit);
router.put("/:id", featuredProductController.update);
router.delete("/:id", featuredProductController.destroy);
router.get("/", featuredProductController.index);

module.exports = router;

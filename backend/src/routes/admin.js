const express = require("express");
const router = express.Router();

const adminController = require("../app/controllers/Admin");

router.post("/login", adminController.index);

module.exports = router;

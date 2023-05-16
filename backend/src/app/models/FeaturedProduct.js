const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeaturedProduct = new Schema(
  {
    description: { type: String },
    imgURL: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Featured_Products", FeaturedProduct);

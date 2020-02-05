var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  productName: String,
  productDescription: String,
  price: Number,
  discount: Number,
  skuCode: String,
  categoryID: String // category document's object id
});

var Product = mongoose.model("product", ProductSchema);
module.exports = Product;

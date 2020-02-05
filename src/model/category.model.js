var mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
  categoryName: String,
  categoryDescription: String,
  categoryId: String
});

var Category = mongoose.model("category", CategorySchema);
module.exports = Category;

var Product = require("../../model/product.model");
// Add Product Details and map the category Id
exports.addProduct = function(req, res) {
  var product = new Product();
  product.productName = req.body.productName;
  product.productDescription = req.body.productDescription;
  product.price = req.body.price;
  product.discount = req.body.discount;
  product.skuCode = req.body.skuCode;
  product.categoryID = req.body.categoryID;
  product.save(function(err, productData) {
    if (err) {
      res.status(500).json(err);
    } else {
      // send the saved product data as response
      res.status(200).json(productData);
    }
  });
};

exports.getAllProduct = function(req, res) {
  Product.find({})
    .select()
    .exec(function(err, productData) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(productData);
      }
    });
};

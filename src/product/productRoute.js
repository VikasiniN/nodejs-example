var categoryMgr = require("./category/categoryMgr");
var addProductMgr = require("./addProduct/addProductMgr");

module.exports = function(app) {
  //   Products Module

  app
    .route("/createcategory") //  Create  the category
    .post(categoryMgr.createCategory);

  app
    .route("/getcategory") //  View All  the category
    .get(categoryMgr.getAllCategory);

  // Task No 3
  app
    .route("/getassociatedproducts") //  View the category and the  number of associated product
    .get(categoryMgr.getAssocaitedProducts);
  app
    .route("/addproduct") //  Add the product
    .post(addProductMgr.addProduct);

  app
    .route("/getproduct") //  View All  the product
    .get(addProductMgr.getAllProduct);
};

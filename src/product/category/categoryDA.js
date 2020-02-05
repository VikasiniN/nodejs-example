var Category = require("../../model/category.model");

// create the category and save it in the category model
exports.createCategory = function(req, res) {
  var category = new Category();
  category.categoryName = req.body.categoryName;
  category.categoryDescription = req.body.categoryDescription;
  category.categoryId = req.body.categoryId;
  category.save(function(err, categoryData) {
    if (err) {
      res.status(500).json(err);
    } else {
      // send the saved category data as response
      res.status(200).json(categoryData);
    }
  });
};

//  view all the category ,which is saved in category model
exports.getAllCategory = function(req, res) {
  Category.find({})
    .select()
    .exec(function(err, data) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(data);
      }
    });
};

// get the number of products associated with the category
exports.getAssocaitedProducts = function(req, res) {
  Category.aggregate(
    [
      {
        $lookup: {
          from: "products",
          localField: "categoryId",
          foreignField: "categoryID",
          as: "associatedProduct"
        }
      },
      {
        $project: {
          categoryName: 1,
          number_of_product: { $size: "$associatedProduct" }
        }
      }
    ],
    function(err, data) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(data);
      }
    }
  );
};

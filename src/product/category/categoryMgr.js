var categoryDA = require("./categoryDA");

exports.createCategory = function(req, res) {
  try {
    categoryDA.createCategory(req, res);
  } catch (err) {
    console.log(err);
  }
};

exports.getAllCategory = function(req, res) {
  try {
    categoryDA.getAllCategory(req, res);
  } catch (err) {
    console.log(err);
  }
};

exports.getAssocaitedProducts = function(req, res) {
  try {
    categoryDA.getAssocaitedProducts(req, res);
  } catch (err) {
    console.log(err);
  }
};

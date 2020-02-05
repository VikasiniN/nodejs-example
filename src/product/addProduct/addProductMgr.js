var addProductDA = require("./addProductDA");

exports.addProduct = function(req, res) {
  try {
    addProductDA.addProduct(req, res);
  } catch (err) {
    console.log(err);
  }
};

exports.getAllProduct = function(req, res) {
  try {
    addProductDA.getAllProduct(req, res);
  } catch (err) {
    console.log(err);
  }
};

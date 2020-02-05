var productRoute = require("./product/productRoute");

exports.loadRoutes = function(app) {
  productRoute(app);
};

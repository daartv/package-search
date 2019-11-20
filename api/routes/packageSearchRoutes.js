/* eslint-disable global-require */
module.exports = function (app) {
  const packageSearch = require('../controllers/packageSearchController');

  // todoList Routes
  app.route('/packages')
    .get(packageSearch.getAllPackages);


  app.route('/packages/search')
    .get(packageSearch.findAPackage);
};

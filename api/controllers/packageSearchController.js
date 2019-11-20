const Package = require('../models/packageSearchModel.js');

const FIELDS = ['Package', 'Version', 'Description', 'SHA256', 'Dependencies', 'Recommends', 'Conflicts'];

exports.getAllPackages = async function (req, res) {
  const pkgs = await Package.find({}).select(FIELDS.join(' '));
  res.json(pkgs);
};


exports.findAPackage = async function (req, res) {
  const { body } = req;
  const pkgs = await Package.find({ Package: { $regex: body.query, $options: 'i' } }).select(FIELDS.join(' '));
  res.json(pkgs);
};

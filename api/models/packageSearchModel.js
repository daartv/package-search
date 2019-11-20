
const mongoose = require('mongoose');

const { Schema } = mongoose;


const PackageSchema = new Schema({
  Package: { type: String, required: true },
  Architecture: { type: String },
  Version: { type: String },
  'Multi-Arch': { type: String },
  Priority: { type: String },
  Section: { type: String },
  Source: { type: String },
  Origin: { type: String },
  Maintainer: { type: String },
  'Original-Maintainer': { type: String },
  Bugs: { type: String },
  'Installed-Size': { type: Number },
  Provides: { type: String },
  Depends: { type: String },
  Conflicts: { type: String },
  Breaks: { type: String },
  Filename: { type: String },
  Size: { type: Number },
  MD5sum: { type: String },
  SHA1: { type: String },
  SHA256: { type: String },
  Homepage: { type: String },
  Description: { type: String },
  Task: { type: String },
  'Description-md5': { type: String },
  Supported: { type: Date },
  Essential: { type: Boolean },
  'Pre-Depends': { type: String },
  Suggests: { type: String },
  Replaces: { type: String },
  'Build-Essential': { type: Boolean },
  Recommends: { type: String },
  Important: { type: Boolean },
});

module.exports = mongoose.model('package', PackageSchema, 'package');

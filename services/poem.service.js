const mongoose = require('mongoose');
const Poem = require('../models/poem.model.js');

// find all poems
module.exports.findPoems = () => {
  return Poem.find();
}

// find one poem
// module.exports.findPoemById = (id) => {
//   return Poem.findById(id);
// }

module.exports.findPoemByUrl = (url) => {
  return Poem.find({url: url})
}
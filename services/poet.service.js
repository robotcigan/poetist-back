const mongoose = require('mongoose');
const Poet = require('../models/poet.model.js');

// find all poets
module.exports.findPoets = () => {
  return Poet.find();
}

// find one poet
// module.exports.findPoemById = (id) => {
//   return Poem.findById(id);
// }

module.exports.findPoetByUrl = (url) => {
  return Poet.find({url: url})
}
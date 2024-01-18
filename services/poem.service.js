const mongoose = require('mongoose');
const Poem = require('../models/poem.model.js');

// find all poems
module.exports.findPoems = () => {
  return Poem.find();
}

// find all poems by one poet (author)
module.exports.findPoemsByPoet = (poet) => {
  return Poem.find({poet: poet})
}

// find 10 poems by multiple Poets (authors)
module.exports.findPoemsByPoets = (poets) => {
  console.log('poets', poets.split(","))
  return Poem.find({poet: poets.split(',')})
}

// find one poem
// module.exports.findPoemById = (id) => {
//   return Poem.findById(id);
// }

module.exports.findPoemByUrl = (url) => {
  return Poem.find({url: url})
}

// delete all poems
module.exports.deleteAllPoems = () => {
  return Poem.deleteMany()
}
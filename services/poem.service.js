const mongoose = require('mongoose');
const Poem = require('../models/poem.model.js');

// find all poems
module.exports.findPoems = () => {
  return Poem.find();
}

// find all poems by one poet (author)
module.exports.findPoemsByPoet = (poet, popular) => {
  // Если в get-запросе есть popular=true, то я передам только популярные
  if (popular) {
    return Poem.find({poet: poet, popular: true})
  } else {
    return Poem.find({poet: poet})
  }
}

// find poems by multiple Poets (authors)
module.exports.findPoemsByPoets = (poets, popular) => {
  if (popular) {
    return Poem.find({poet: poets.split(','), popular: true})
  } else {
    return Poem.find({poet: poets.split(',')})
  }
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
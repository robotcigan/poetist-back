const mongoose = require('mongoose');
const Poet = require('../models/poet.model.js');

// poets search result
module.exports.search = query => {
  let regexp = new RegExp(query, 'i')
  return Poet.find({lastName: regexp})
}
// module.exports.findPoetByUrl = (url) => {
//   return Poet.findOne({url: url})
// }
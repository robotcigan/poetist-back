const mongoose = require('mongoose');

const poemScheme = mongoose.Schema({
  name: String,
  tags: [],
  author: String,
  date: Date
})

let Poem = mongoose.model('Poem', poemScheme);

module.exports = Poem;
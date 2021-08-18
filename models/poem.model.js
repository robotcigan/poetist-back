const mongoose = require('mongoose');

const poemScheme = mongoose.Schema({
  title: String,
  tags: [],
  poet: String,
  url: String,
  year: Number
})

let Poem = mongoose.model('Poem', poemScheme);

module.exports = Poem;
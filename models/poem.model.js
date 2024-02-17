const mongoose = require('mongoose')

const poemScheme = mongoose.Schema({
  title: String,
  tags: Array,
  text: String,
  year: Number,
  poet: String,
  popular: Boolean,
  url: String
})

let Poem = mongoose.model('Poem', poemScheme)

module.exports = Poem
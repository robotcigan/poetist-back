const mongoose = require('mongoose')

const poetScheme = mongoose.Schema({
  _id: String,
  firstName: String,
  lastName: String,
  middleName: String,
  url: {
    type: String,
    unique: true
  },
  born: Date,
  died: Date,
  years: Number
})

let Poet = mongoose.model('Poet', poetScheme)

module.exports = Poet
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = Schema({
  dui: String,
  name: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('persons', PersonSchema);

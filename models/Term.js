const mongoose = require('mongoose');

const TermSchema = new mongoose.Schema({
  definition: {
    type: String,
    trim: true,
    required: true
  },
  abbreviation: {
    type: String,
    trim: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Term', TermSchema);
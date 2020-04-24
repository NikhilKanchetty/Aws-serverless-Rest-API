const mongoose = require('mongoose');
const NoteSchema = mongoose.Schema({  
  title: String,
  description: String
});
module.exports = mongoose.model('Note', NoteSchema);
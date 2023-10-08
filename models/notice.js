const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noticeSchema = new Schema({
  body: {type: String, required: true},
  creationDate: {type: String, required: true},
  editDate: {type: String, required: false},
});

module.exports = mongoose.model('Notice', noticeSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noticeSchema = new Schema({
  body: {type: String, required: true},
  creationDate: {type: String, required: true},
});

module.exports = mongoose.model('Notice', noticeSchema);
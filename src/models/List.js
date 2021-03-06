const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Person = require('./Person');

const List = new Schema({
    title: {
      type: String,
      index: true
    },
    date: Date,
    people: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    creator: String
});
  
module.exports = mongoose.model('List', List);
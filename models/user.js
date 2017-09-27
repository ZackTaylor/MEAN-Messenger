var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = requuire('mongoose-unique-validator');

var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  messages: [{type: Shema.Types.ObjectId, ref: 'Message'}]
});

shema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort = new Schema({
  nom: {
    type: String
  },
  age: {
      type: Number
  },
  type: {
      type: String
}
},{
    collection: 'servers'

});

module.exports = mongoose.model('ServerPort', ServerPort);

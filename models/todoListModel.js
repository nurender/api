var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  _id:{
    type: String,
    // required: true
  },
  name: {
    type: String,
    required :true 
  },
  Last_Name: {
    type: String,
    required:true
  },
  user_id:{
    type: String
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskTwoSchema = new Schema({
    _id:{
        type: String,
        // required: true
    },
    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('TasksTwo', TaskTwoSchema);
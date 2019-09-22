var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserModel = new Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    status: Boolean
})

module.exports = mongoose.model('UserModel',UserModel);
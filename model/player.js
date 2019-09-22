var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerModel = new Schema({
    name:String,
    status: Boolean
})

module.exports = mongoose.model('PlayerModel',PlayerModel);
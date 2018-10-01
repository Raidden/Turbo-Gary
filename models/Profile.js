const mongoose = require('mongoose');

let schema = new mongoose.Schema(
    {
        firstName: {type:String,trim:true, default:''},
        lastName:{type:String, default:''},
        age:{type: Number, default:0},
        team:{type:String, trim:true, default:''},
        position:{type:String,trim:true, default:''}
    }
);

module.exports = mongoose.model('Profile', schema);
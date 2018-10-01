const mongoose = require('mongoose');

let schema = new mongoose.Schema(
    {
        img : {type:String, required:true },
        comment: {type:String, required:false, max :100}
    }
);

module.exports = mongoose.model('gary', schema);
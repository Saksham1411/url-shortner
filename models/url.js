const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectLink:{
        type:String,
        required:true
    },
    visitHistory:[{timestamp : {type:Number}}],
},{timestamp});

module.exports = mongoose.model("url",urlSchema);
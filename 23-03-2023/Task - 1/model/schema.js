const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "please provide your name"]
    },
    branch : {
        type : String,
        required : [true, "please provide your branch"]
    }, 
    image : {
        type : Buffer,
        contentType : "image/jpeg"
    }
})

module.exports = mongoose.model("user", userSchema);
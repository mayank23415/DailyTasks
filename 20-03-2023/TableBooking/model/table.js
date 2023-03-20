const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tableSchema = mongoose.Schema( {
    date : {
        type : String,
        required : true,
    },
    start : {
        type : String,
        required : true,
    },
    end : {
        type : String,
        required : true,
    },
    type : {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model("table", tableSchema);
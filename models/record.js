const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    url:{
        type:String
    },
    title:{
        type: String
    },
    author:{
        type:String
},
    year:{
        type:String
    },
   




})

const Record = mongoose.model('records',recordSchema);

module.exports = Record;
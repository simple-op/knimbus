const mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost/records');  

const db = mongoose.connection;   


db.on('error',function(){console.log("error in connecting to Db")});  



db.once('open',function(){
    console.log('Database Successfuly Connected');
})

module.exports =db; 
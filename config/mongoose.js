const mongoose =require('mongoose');

//  to connect the database
mongoose.connect('mongodb://localhost/codeial_development');

// acquired the connection (to check is functioning)
const db=mongoose.connection;
// if connection is failed
db.on('error', console.error.bind(console, 'connection error:'));
// for sucessful connection
db.once('open', function() {
  console.log('we are connecting to the db')
});

// to make use outside we have to export it 
module.exports=db;
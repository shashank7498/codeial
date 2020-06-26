 const express= require('express');
 const path= require('path');
 const app= express();
 const port =8000;

 app.use('/', require('./routes/index'));
 app.use(express.urlencoded({ extended: true }));
 // set-up the view engine
 app.set('view engine','ejs');
// app.set('views', path.join(__dirname,'views'));
app.set('views','views');


 app.listen(port,function(err){
     if(err){
         console.log(`Error in runnig the server:${err}`);
     }
     console.log(`Server is running on port:${port}`);
 })
 
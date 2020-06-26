 const express= require('express');
 const app= express();
 const port =8000;

 app.use('/', require('./routes/index'));

 // set-up the view engine
 app.set('view engine','ejs');
 app.use('views','./views');


 app.listen(port,function(err){
     if(err){
         console.log(`Error in runnig the server:${err}`);
     }
     console.log(`Server is running on port:${port}`);
 })
 
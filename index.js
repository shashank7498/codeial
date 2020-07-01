 const express= require('express');
 const cookieParser= require('cookie-parser');
 const path= require('path');
 const expressLayouts=require('express-ejs-layouts');
 const db=require('./config/mongoose');
 
 // used for session cookie
 const session =require('express-session');
 const passport=require('passport');
 const passportLocal=require('./config/passport-local-strategy');
 // to store the session cookie we use mongo-store
 const MongoStore=require('connect-mongo')(session);

 // start the express app
 const app= express();
 // set the port number 8000 for our express server
 const port =8000;



 app.use(express.urlencoded({ extended: true }));

 // this is  for cookie
 app.use(cookieParser());

 app.use(express.static('./assets'));

 app.use(expressLayouts);
 
 // extract style and scripts from sub pages into the layouts
 app.set('layout extractStyles', true);
 app.set('layout extractScripts', true);

 
 // set-up the view engine
 app.set('view engine','ejs');
// app.set('views', path.join(__dirname,'views'));
app.set('views','views');
// Mongostore is use to store the session cookie in the db

// session 
app.use(session({
    name:'codeial',
    // TODO change  the secrete before the deployment  in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: new MongoStore({
        mongooseConnection:db,
        autoRemove:'disabled',
    }, function(err){
        console.log(err || 'connect mongodb setup OK');
    })

}));

app.use(passport.initialize());
app.use(passport.session());
// use the cookie to set the user  if the session isn't expired
app.use(passport.setAuthenticatedUser);
 // this will take you the index.js in routes
 app.use('/', require('./routes/index'));

 app.listen(port,function(err){
     if(err){
         console.log(`Error in runnig the server:${err}`);
     }
     console.log(`Server is running on port:${port}`);
 })
 
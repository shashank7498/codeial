// import passport  library after installing
const passport = require('passport');
// importing the passport strategy like local

const LocalStrategy=require('passport-local').Strategy;

// import the user from the db
const User= require('../models/user');

// authentication using passport
passport.use(new LocalStrategy({
       usernameField:'email'
},
function(email, password, done){
    // find a user and establish a identity
    // format of done function donr(err,anthing);
    User.findOne({ email: email }, function (err, user) {
        if (err) {
            console.log('error in finding the user ---> passport')
             return done(err);
         }
        if (!user || user.password!=password) {
             console.log('Invalid username/password');
             return done(null, false); 
        }
      //  if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });


}));

// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
     done(null, user.id);

});

// deserializing  the user from the key  in the cookie
passport.deserializeUser(function(id,done){
    User.findById(id, function(err, user){
        if (err) {
            console.log('error in finding the user ---> passport')
             return done(err);
         }
         done(null, user);
    });
});

// creating my own middleware for checking authentication of user
// check if user is authenticated
passport.checkAuthentication=function(req, res, next){
    // if user is signed in then pass on the request to the next function(controller's action);
    if(req.isAuthenticated()){
        return next();
    }
    // if user is not signed in
    return res.redirect('/users/sign-in');
};
// passport.setAuthenticatedUser = function(req, res, next){
//     if(req.isAuthenticated()){
//         // req.user contains the current signed in user from the session cookie , we're jsut sending this to the  locals for the views 
//         res.local.user=req.user;
//     }
       
// }
passport.setAuthenticatedUser= function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}


// export now for external use
module.exports=passport;
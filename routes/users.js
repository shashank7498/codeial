const express= require('express');
const passport=require('passport');

const router= express.Router();
 const userController= require('../controllers/user_Controller');



 router.get('/profile',passport.checkAuthentication ,userController.profile);
 router.get('/sign-up',userController.signUp);
 router.get('/sign-in',userController.signIn);
 router.post('/create',userController.create);

// use passport as a middleware  to authenticate the user
 router.post('/create-session',passport.authenticate(
     'local', 
     { failureRedirect: '/sign-in' }
     ),userController.createSession);

 // for any further routes 





module.exports=router;
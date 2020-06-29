const express= require('express');

const router= express.Router();
 const userController= require('../controllers/user_Controller');



 router.get('/profile', userController.profile);
 router.get('/sign-up',userController.signUp);
 router.get('/sign-in',userController.signIn);
 // for any further routes 





module.exports=router;
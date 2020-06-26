const express= require('express');

const router= express.Router();
 const userController= require('../controllers/user_Controller');



 router.get('/profile', userController.profile);

 // for any further routes 





module.exports=router;
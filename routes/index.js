const express= require('express');

const router= express.Router();
const  homeController=require('../controllers/home_Controller');



console.log("router is loaded");
// calling the action home  from the home_Controller.js using the route homeController
router.get('/', homeController.home);
router.use('/users',require('./users'));


module.exports=router;
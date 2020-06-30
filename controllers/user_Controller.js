// import user from the database
const User=require('../models/user')
// render the profile page
module.exports.profile=function(req, res){
    return  res.render('user_profile',{
        title:"Home"
    });
};
// render the sign up  page 
module.exports.signUp=function(req, res){

  return res.render('user_sign_up',{
        title:"Codeial | Sign-Up"
    });
}
// render the sign in page 
module.exports.signIn=function(req, res){

    return res.render('user_sign_in',{
          title:"Codeial | Sign-In"
      });
  }
  // get the sign up data
 module.exports.create=function(req, res){
     console.log(req.body); 
     let pass=req.body.password;
     let cpass=req.body.confirm_password;  
    // console.log(pass, cpass);
    if(pass!=cpass){
         return  res.redirect('back');
     }
     User.findOne({email:req.body.email}, function(err,user){
         if(err){
             return console.log('error in finding  the user');
         }
         if(!user){
             User.create({
                 name:req.body.name,
                 password:req.body.password,
                 email:req.body.email
             }, function(err, user){
                 if(err){
                     return console.log('error in creating  the user');
                 }
                 return res.redirect('/users/sign-in');

             })
         }
         else{
             console.log('user already exist');
             return res.redirect('back');
         }
     })
     // todo later
 }
 // get the sign-in data and create session for the user
 module.exports.createSession= function(req, res){
     // todo later
 }
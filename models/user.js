const mongoose =require('mongoose');

const userschema=  new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
   name:{
       type:String,
       required:true
   }
},{
    timestamps:true
});
//   creating the User (the name of collection of userschema)
const User= mongoose.model('User', userschema);
// now export this Task collection
module.exports=User;



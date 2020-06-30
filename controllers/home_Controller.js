module.exports.home=function(req, res){
    // console.log(req.cookies);
     //  changing the value of cookie
     //res.cookie('user_id', 'changeid' );
   return  res.render('home',{
        title:"Home"
    });
};
//  module.exports.actionname=funtion(req,res){};                   
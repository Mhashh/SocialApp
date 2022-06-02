const user = require('../models/user')

exports.signup = function(req,res){
    const {username,email,password} = req.body;
    user.findOne({email}).exec(function(err,user){
        if (user) {
            return res.status(400).json({
              error: "Email is taken",
            });
    }})

    user.findOne({username}).exec(function(err,user){
        if (user) {
            return res.status(400).json({
              error: "username is taken",
            });
    }})

    const newuser = new user({username,email,password})
    newuser.save((err,newuser)=>{
        if(err){
            console.log('SAVED USER IN ACCOUNT ACTIVATION')
            return res.status(401).json({
                error:'ERROR saving user in database'
            })
        }

        return res.json({
        message:'Signup success.PLease signin'
        })
            
    })
}
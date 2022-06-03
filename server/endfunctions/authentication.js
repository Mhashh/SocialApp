const user = require('../models/user')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

exports.signup = function(req,res){
    //destructure response body
    const {username,email,password} = req.body;
    //check for email existing
    user.findOne({email}).exec(function(err,user){
        if (user) {
            return res.status(400).json({
              error: "Email is taken",
            });
    }})

    //check for username existing
    user.findOne({username}).exec(function(err,user){
        if (user) {
            return res.status(400).json({
              error: "username is taken",
            });
    }})
    
    //new details to save in db
    const newuser = new user({username,email,password})
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
      });

      let mailOptions = {
        from: "054maheshtiria@gmail.com",
        to: `${email}`,
        subject: 'Chatcafe account activation',
        text: 'Hi from your chatcafe project'
      };

      transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });

    //save in db
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

exports.signin = function(req,res){
    const {email,password} = req.body;
    //find target account
    user.findOne({email}).exec(function(err,olduser){
        //error or unknown email
        if (err || !olduser) {
            return res.status(400).json({
              error: "No account with given email exists!",
        })};
        
        //check if password correct
        if(!olduser.authenticate(password)){
            return res.json({
                error:'Email and password do not match.'
            })
        }
        
        //creating a jwt token
        const token = jwt.sign({id:olduser.id},process.env.JWT_SECRET,{expiresIn:'4d'});
        const username = olduser.username;
        const id = olduser.id
        //sending username and detail
        return res.json({
            token,
            user:{id,username,email}
        })

    })

    


}
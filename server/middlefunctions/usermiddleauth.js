const expressjwt = require('express-jwt')
const user = require('../models/user')
const jwt = require('jsonwebtoken')
exports.signin = expressjwt({
        secret:`${process.env.JWT_AUTH}`,
        algorithms:["HS256"]
    })

exports.isSigninedIn = function(req,res,next){
    const {token} = req.body
    if(token){
        jwt.verify(token, function(error,decoded){
        if(error){
            return res.status(400).json({
            error:"Invalid user access."
            })
        }
        else{
            user.findOne(decoded).exec(
            function(err,userid){
                if(err){
                return res.status(400).json({
                    error:"Invalid user access."
                })
                }
                else{
                next()
                }
            }
    
    
            )
        }
        })
    }else{
        return res.status(400).json({
        error:"Invalid user access."
        })
    }
    }
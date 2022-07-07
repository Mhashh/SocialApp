const user = require('../models/user');
const post = require('../models/post');

exports.addColleague = function(req,res){
    const {id,colleague} = req.body;
    const username = colleague;
    
    user.findOne(username).exec(
        function(err,colleague){
            if(err || !colleague){
                return res.status(400).json({
                    error:"Account with the username not found!"
                })
            }
        }
    )


}

exports.seekUsers = function(req,res){
    const {searchtag} = req.body
    console.log("seek users called")
    var regex = new RegExp(+searchtag+'/*', "g")
    user.find({username:regex},{"username":1,"_id":0}).exec(
        function(err,colleague){
            if(err || !colleague){
                return res.status(400).json({
                    error:"Account with the username not found!"
                })
            }else{
                return res.json({
                    colleague
                })
            }
        }
    )
}


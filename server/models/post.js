const mongoose = require('mongoose')

const commentSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        commentmsg:{
            type:String,
            minlength:1,
            maxlength:100
        }
    },{timestamps:true}
)

const postSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            trim: true,
            required: true,
            min:4,
            max: 32
        },
        msg:{
            type: String,
            trim: true,
            minlength:1,
            maxlength:100
        },
        link:{
            type: String,
        },
        up:{
            type:Number,
            min:-99999,
            max:99999,
            default:0
        },
        down:{
            type:Number,
            min:-99999,
            max:99999,
            default:0
        },
        uplist:{
            type:[String],
        }
        ,
        downlist:{
            type:[String],
        }
        ,
        comments:{
            type:[commentSchema]
        },

        
    },{timestamps:true}
);



module.exports = mongoose.model('posts',postSchema);




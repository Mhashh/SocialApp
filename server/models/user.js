const mongoose = require('mongoose')
const crypto = require('crypto')

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            trim: true,
            required: true,
            min:4,
            max: 32
        },
        email:{
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
        passwordHash:{
            type: String,
            required: true
        },
        salt:string,
        role: {
            type: String,
            default: 'user'
        },
    }
);

userSchema.methods ={
    makeSalt:function(){
        return Math.round(new Date().valueOf() * Math.random()) + '';
    },
    encrypt:function(password){
        if(!password)
            return '';
        try{
            let hashTemp = crypto.createHmac("sha256",this.salt).update(password).digest('hex');
            return hashTemp;
        }catch(err){
            return '';
        }
    },
    authenticate:function(userInputPassword){
        return this.encrypt(userInputPassword) === this.passwordHash
    }
}

userSchema.virtual('password').set(function(password){
    this._password = password;

    this.salt = this.makeSalt();

    this.passwordHash = encrypt(password);
}).get(function(){
    return this._password;
})




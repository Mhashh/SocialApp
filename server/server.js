//express module included
const express= require('express');

//web  specific

const app = express();//intialized express app

const bodyParser=require('body-parser'); //parses request body 

require('dotenv').config();//allows env config file to be used

//web specific

//route imports

//route imports

//development specific
const cors = require('cors');

//development specific


app.use(bodyParser.json());

if(process.env.NODE_ENV == 'development'){
    app.use(cors({origin:'http://localhost:3000'}));
}

//adding imported routes
    
//adding imported routes



app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server running on ${process.env.PORT}`);
})



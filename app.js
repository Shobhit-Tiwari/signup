const express = require("express");
const Routes = require("./routes");
const app = express();
const morgan = require('morgan');
const mongoose = require("mongoose");

app.use(morgan('dev'));

try{
 mongoose.connect('mongodb+srv://dbTanuj:tanuj1998@tanuj0-ks1k4.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
}catch(e)
{
    console.log(e);
}

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",'*');
    res.header("Access-Control-Allow-Headers",'*');
    if(req.method === 'OPTIONS')
    {
        res.header("Access-Control-Allow-Methods",'*');
    }
    next();
})

app.use(Routes);

module.exports=app;
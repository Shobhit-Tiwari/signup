var User = require("../models/UsersModel");
var express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
  res.status(200).json({
    message:"user api get"
  })
})

router.post('/',(req,res)=>{
  try{
      var user = new User({
      username : req.username,
      password : req.password,
      name: req.name
    })
  }catch(e)
  {
     res.status(500).json({
      message:"Error"
    })
  }finally{
     res.status(200).json({
       user,
      message:"user created"
    })
  }
    
})

router.put('/',(req,res)=>{
  res.status(200).json({
    message:"user api put"
  })
})

module.exports = router;

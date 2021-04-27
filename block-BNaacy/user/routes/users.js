
var express = require("express");

var router = express.Router();

var User = require("../models/user")


router.get("/new" ,(req,res)=>{
    res.render("userForm")
})

router.post("/",(req,res)=>{
console.log(req.body);
User.create(req.body,(err,user)=>{
    if(err){
        res.json(err)
    }else{
User.create
        res.json(user)
    }
})
})




module.exports =router
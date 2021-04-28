
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

router.get("/",(req,res)=>{
    User.find((err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})


router.get("/:id",(req,res)=>{
    let id= req.params.id
    User.findById(id,(err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})

router.get("/:userId/edit",(req,res)=>{
    let userId =  req.params.userId;
    User.findById(userId,(err,usr)=>{
        if(err){
            res.json(err)
        }else{
           res.render("singleUser",{user:usr})
        }
    })
})

router.post("/:id",(req,res)=>{
    let id = req.params.id;
    User.findByIdAndUpdate(id,req.body,(err,updatedUser)=>{
        if(err){
            res.json(err)
        }else{
           res.json({updatedUser:updatedUser})
        }
    })
})


module.exports =router
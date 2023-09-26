const mongoose = require('mongoose');
const userdata = require('../models/userModel');
const bcrypt = require('bcrypt')
const signup =async (req,res,next)=>{
    try{
        const {username,email,password} = req.body;
        const usernameChecker = await userdata.findOne({username});   
        if(usernameChecker){
            return res.json({goodtogo:false,err:"username already exist"});
        }
        const emailChecker = await userdata.findOne({email});   
        if(emailChecker){
            return res.json({goodtogo:false,err:"email already exist"});
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await userdata.create({
            username,email,
            password:hashedPassword
        })
        res.json({goodtogo:true,success:"Success"});
    }catch{
        res.status(500);
    }
}

const login = async (req,res,next)=>{
    const user =await userdata.findOne({username:req.body.username})
    if(!user){
        return res.json({err:"Invalid credentials"})
    }
    try{
        if(await bcrypt.compare(req.body.password,user.password)){
            res.status(200).json({goodtogo:true,success:"Success"});
        }else{
            return res.json({err:"Invalid credentials"});
        }
        
    }catch{
        res.status(500);
    }
}
const alldata = async (req,res,next)=>{
    try{
        const alldata = await userdata.find();
        res.json(alldata);
    }catch{
        res.status(500);
    }
}
const deletealldata = async(req,res,next)=>{
    try{
        const deletealldata = await userdata.deleteMany();
        res.send("Data Deleted");
    }catch{
        res.status(500);
    }
}
module.exports={
    login,
    signup,
    alldata,
    deletealldata
}

const Userauth = require("../models/userauthSchema")
const bcrypt = require('bcryptjs')
const  jwt  = require('jsonwebtoken')


const register = async(req,res)=>{
    try{
        const { fname,email,password } = req.body
        const existuser = await Userauth.findOne({email:email})
        if (existuser) res.status(400).json({message:"you have an account already registered"})
        const cryptPassword = await bcrypt.hash(password,12)
        
        const newuser = new Userauth({ fname , email ,password:cryptPassword} )
        const user = await newuser.save();
        
        const token = await jwt.sign({email,id:user._id},'workshop',{expiresIn:"2h"})
        console.log("hello")
        res.status(200).json({user,token});
    }catch{
        res.status(500).json({message:"somthing went wrong"})
    }
}
module.exports={register}
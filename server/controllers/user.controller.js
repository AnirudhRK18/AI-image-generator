import usermodel from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const register=async(req,res)=>{
try {
    const {name,email,password}=req.body;

    if(!name || !email || !password){
        res.json({success:false,message:'missing details'})
    }

    const salt=await bcrypt.genSalt(10)

    const hashedpass=await bcrypt.hash(password,salt)

    const userdata={
        name,email,password:hashedpass
    }

    const newuser=new usermodel(userdata)

    const user=await newuser.save();

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET)

return res.json({success:true,token,user:{name:user.name}})    




} catch (error) {
    console.log("error in signup",error);
    res.json({success:false})
    
}
}


export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;

        const user=await usermodel.findOne({email})

        if(!user){
            res.json({success:false,message:'user does not exist'})
        }

        const ismatch=await bcrypt.compare(password,user.password)

        if(!ismatch){
            res.json({success:false,message:'user password not true'})
        }

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
        
         res.json({success:true,token,user:{name:user.name}})
    } catch (error) {
        console.log("error in login",error);
        
    }
}


export const usercredits=async(req,res)=>{
    try {
        const {userId}=req.body

        const user=await usermodel.findById(userId)

        res.json({success:true,credits:user.creditbalance,user:{name:user.name}})
    } catch (error) {
        console.log("error in credit");
        
    }
}


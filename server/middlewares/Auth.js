import jwt from 'jsonwebtoken'

const userauth=async(req,res,next)=>{
    try {
        const {token}=req.headers;

        if(!token){
            return res.json({success:false,message:"not authorized"})
        }

        const tokendecode=jwt.verify(token,process.env.JWT_SECRET)

        if(tokendecode.id){
            req.body.userId=tokendecode.id;
        }
        else{
            return res.json({success:false,message:"not authorized login again"})
        }

        next();
    } catch (error) {
        console.log("error in userauth",error);
        
    }
}

export default userauth;
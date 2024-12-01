import usermodel from "../models/User.js";
import FormData from 'form-data'
import axios from 'axios'

export const generateimage=async(req,res)=>{
    try {

        const {userId,prompt}=req.body;


        const user=await usermodel.findById(userId);

        if(!user || !prompt){
                return res.json({message:"either prompt or user is not valid"})
        }

        if(user.creditbalance === 0 || usermodel.creditbalance < 0){
                return res.json({message:"No credits left",credits:user.creditbalance})
        }

        const formdata=new FormData();

        formdata.append('prompt',prompt)


      const {data}=  await axios.post('https://clipdrop-api.co/text-to-image/v1',formdata,{
            headers: {
                'x-api-key': process.env.API_KEY,
              },
              responseType:'arraybuffer'
        })

        const base64image=Buffer.from(data,'binary').toString('base64')

        const result=`data:image/png;base64,${base64image}`


        await usermodel.findByIdAndUpdate(user._id,{
            creditbalance:user.creditbalance-1
        })

        res.json({success:true,message:'image genrated',creditbalance:user.creditbalance-1,result})


        
    } catch (error) {
        console.log("error in generate image",error);
        
    }
}
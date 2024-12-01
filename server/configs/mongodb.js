import mongoose from "mongoose";

const connectdb=async()=>{
    try {
        mongoose.connection.on('connected',()=>{
            console.log("database connected");
            
        })
        await mongoose.connect(process.env.MONGO_URL)

    } catch (error) {
        console.log("error in mongodb",error);
        
    }
}


export default connectdb;
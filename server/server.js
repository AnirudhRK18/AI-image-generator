import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectdb from './configs/mongodb.js';
import userrouter from './routes/user.route.js';
import imagerouter from './routes/image.route.js';


const port=process.env.PORT || 3000

const app=express();

app.use(express.json());

app.use(cors())

app.use('/api/user',userrouter)
app.use('/api/image',imagerouter)


app.listen(port,()=>{
    connectdb();
    console.log(`server started at ${port}`)
})


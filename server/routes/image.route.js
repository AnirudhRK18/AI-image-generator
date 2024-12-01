import express from 'express';
import { generateimage } from '../controllers/image.controller.js';
import userauth from '../middlewares/Auth.js';

const imagerouter=express.Router();


imagerouter.post('/generate-image',userauth,generateimage)


export default imagerouter;
import express from 'express'

import {register,login, usercredits} from '../controllers/user.controller.js'
import userauth from '../middlewares/Auth.js';

const userrouter=express.Router();


userrouter.post('/register',register)

userrouter.post('/login',login)

userrouter.get('/credits',userauth,usercredits)


export default userrouter;
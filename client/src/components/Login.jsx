import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { appcontext } from '../context/Appcontext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {


    const [state, setstate] = useState('Login')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')

    const [password, setpassword] = useState('')


    const {setshowlogin,backendurl,settoken,setuser,token}=useContext(appcontext)


    const onsubmithandler=async(e)=>{
        e.preventDefault();

        try {
            if(state==='Login'){
              const response=  await axios.post(backendurl + '/api/user/login',{
                    email,password
                })

                if (response.data) {
                    settoken(response.data.token);
                    setuser(response.data.user);
                    localStorage.setItem('token', response.data.token);
                    setshowlogin(false);
                   
                }else{
                    console.log("error in login front");
                    
                }
                

          
            }else{
                
                const response=  await axios.post(backendurl + '/api/user/register',{
                   name, email,password
                })

                if (response.data) {
                    settoken(response.data.token);
                    setuser(response.data.user);
                    localStorage.setItem('token', response.data.token);
                    setshowlogin(false);
                   
                    

            }
            else{
                toast.error(res.message)
            }
            }
        } catch (error) {
            console.log("error in submit form in login",error);
            
        }
    }

    


    useEffect(()=>{
        document.body.style.overflow='hidden'

        return ()=>{
            document.body.style.overflow='unset'
        }
    },[])
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black/30 flex z-10 justify-center items-center'>

        <form onSubmit={onsubmithandler} className=' relative p-10 rounded-xl bg-white text-slate-500' >
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
            <p className='text-sm'>Welcome back ! please {state === 'Login' ? 'Login': 'SignUp'} to continue</p>

            {state !== 'Login' &&
                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img width={30} src={assets.profile_icon} alt="" />
                <input value={name} onChange={(e)=>setname(e.target.value)} className='outline-none text-sm' required placeholder='Full name' type="text" />
            </div>
            }

            <div className='border px-6 py-2 flex items-center gap-4 rounded-full mt-4'>
                <img width={20} src={assets.email_icon} alt="" />
                <input value={email} onChange={(e)=>setemail(e.target.value)}  className='outline-none text-sm' required placeholder='Email ID' type="email" />
            </div>

            <div className='border px-6 py-2 flex items-center gap-4 rounded-full mt-4'>
                <img width={20} src={assets.lock_icon} alt="" />
                <input value={password} onChange={(e)=>setpassword(e.target.value)}  className='outline-none text-sm' required placeholder='password' type="password" />
            </div>

            <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forget password?</p>

            <button className='bg-blue-600 w-full text-white py-2 rounded-full '> {state === 'Login' ? 'Login' : 'Create Account'}</button>

           { state ==='Login' ?
             <p className='mt-5 text-center'>Dont have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setstate('Signup')}>Sign up</span></p>
                :
             <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer'  onClick={()=>setstate('Login')}>Login</span></p>
           }

            <img onClick={()=>setshowlogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
        </form>

    </div>
  )
}

export default Login
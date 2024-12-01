import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const appcontext=createContext()


const Appcontextprovider=(props)=>{
    const [user,setuser]=useState(false)

    const [showlogin, setshowlogin] = useState(true)

    const [token, settoken] = useState(localStorage.getItem('token') || ' ')

    const [credit, setcredit] = useState(false)

    const backendurl=import.meta.env.VITE_BACKEND_URL

    const navigate=useNavigate();


    const loadcreditdataa=async()=>{
        try {
            const {data}=await axios.get(backendurl+ '/api/user/credits',{
                headers:{token}
            })

            if(data.success){
                setcredit(data.credits)
                setuser(data.user)
            }
        } catch (error) {
            console.log("error in load credit",error);
            
        }
    }

    const generateimage=async(prompt)=>{
        try {
          const {data}=  await axios.post(backendurl+ '/api/image/generate-image',{prompt},{
                headers:{token}
            })
            if(data){
                loadcreditdataa();

                return data.result
            }
            else{
                console.log("error in generate image front",data.message);
                loadcreditdataa();

                if(data.creditbalance===0){
                    navigate('/buy')
                }
                
            }
        } catch (error) {
            console.log("error in generate image",error);
            
        }
    }

    const logout=()=>{
        localStorage.removeItem('token')
        settoken('')
        setuser(null)
    }

    useEffect(()=>{
            if(token){
                loadcreditdataa();
            }
    },[token])

    const value={user,setuser,showlogin,setshowlogin,backendurl,token,settoken,credit,setcredit,loadcreditdataa,logout,generateimage}


    return (
        <appcontext.Provider value={value}>
                {props.children}
        </appcontext.Provider>
    )
}


export default Appcontextprovider
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { appcontext } from '../context/Appcontext'

const Generatebutton = () => {
    const navigate=useNavigate()

    const {user,setshowlogin}=useContext(appcontext)


    const onclickhandler=()=>{
       if(user){
        navigate('/result')
       }else{
        setshowlogin(true)
       }
    }
  return (
    <div className='pb-16 text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the magic.try now</h1>
        <button onClick={onclickhandler} className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500'>
            Generate Image
            <img className='h-6' src={assets.star_group} alt="" />
        </button>
    </div>
  )
}

export default Generatebutton
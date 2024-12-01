import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { appcontext } from '../context/Appcontext'

const Result = () => {


    const [iamge, setiamge] = useState(assets.sample_img_1)
    const [isimageloaded, setisimageloaded] = useState(false)
    const [input, setinput] = useState('')
    const [loading, setloading] = useState(false)

    const {generateimage}=useContext(appcontext)


    const onsubmit=async(e)=>{
        e.preventDefault();
        setloading(true)

        if(input){
            const image=await generateimage(input)

            if(image){
                setisimageloaded(true)
                setiamge(image)
            }
        }
        setloading(false)
    }
  return (
<form onSubmit={onsubmit} className='flex flex-col min-h[90vh] items-center justify-center mt-10 mb-[65px]'>
    <div>
        <div className='relative'>
            <img className='max-w-sm rounded' src={iamge} alt="" />
        </div>

        <p className={` text-center font-semibold text-xl ${!loading ? 'hidden' : ""}`}>Loading....</p>
    </div>


    {
        !isimageloaded &&
    

    <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm py-0.5 mt-10 rounded-full'>
        <input value={input} onChange={(e)=>setinput(e.target.value)} className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' placeholder='Describe what you want to generate' type="text" name="" id="" />

        <button  className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white' type='submit'>Generate</button>
    </div>
    }

    {
        isimageloaded &&
    


    <div className='flex gap-2 flex-wrap justify-center text-white text-sm mt-10 p-0.5 rounded-full'>
        <p onClick={()=>{setisimageloaded(false),setinput('')}} className='bg-transparent border border-inc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
        <a download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer' href={iamge}>Download</a>
    </div>
}
    </form>
  )
}

export default Result
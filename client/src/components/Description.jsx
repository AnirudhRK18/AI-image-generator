import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className=' flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>


        <div className='flex flex-col items-start gap-5 md:gap-14 md:flex-row '>
            <img className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_1} alt="" />
            <div className=''>
                <h2 className='text-4xl font-medium max-w-lg mb-12'>Introducing the AI powered text to image generator</h2>

                <p className='text-gray-600 mb-4 text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, molestiae eos voluptatem, explicabo odit optio dignissimos nulla asperiores blanditiis ex placeat rerum esse alias eius nihil laboriosam iusto accusamus illo nemo tenetur!
                </p>

                <p className='text-gray-600 mb-4 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere voluptatum maiores odio cumque, ab soluta et, blanditiis sequi animi asperiores aut eius.</p>
            </div>
        </div>
    </div>
  )
}

export default Description
import React from 'react'
import hero_1 from '../assets/hero_1.png'
import hero_2 from '../assets/hero_2.png'
import hero_3 from '../assets/hero_3.png'
import {BsArrowRight} from "react-icons/bs"

const Hero = () => {
  return (
    <div className='container max-w-[1500px] pt-8'>
        <div className='grid  xl:grid-cols-3   gap-8'>
            <div className='relative xl:col-span-2 xl:row-star-1'>
                <img className="w-full h-full object-cover rounded-lg" src={hero_1} alt='hero img'/>

                <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                  <p className='text-2xl hidden sm:block'>100% origianal Dry Fruit</p>
                  <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'>Dried Fruits Best Quality</h2>
                  <p className='text-gray-500 text-xl pt-4 sm:pt-3'>Starting At</p>
                  <div className='font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4'>$18.36</div>
                  <div className='bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer'>Shop Now <BsArrowRight /> {""}
                  </div>
                </div> 
             </div>



             <div className='relative grid xl:grid-cols-1  gap-2'>
              <img className='w-full h-full object-cover rounded-lg' src={hero_2} alt='hero img'/>
              <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[20%] -translate-y-[25%] sm:space-y-2">
                 
                  <h2 className='text-2xl sm:text-3xl font-bold'>Best Yummy Pizza</h2>
                  <p className='text-gray-500 text-xl pt-4'>Starting At</p>
                  <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-8 '>$25</div>
                  <div className='bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer'>Shop Now <BsArrowRight /> {""}
                  </div>
                </div>
                
            
             <div className='relative'>
              <img className='w-full h-full object-cover rounded-lg' src={hero_3} alt='hero img'/>
              <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[35%] -translate-y-[25%] sm:space-y-2">
              <h2 className='text-2xl sm:text-3xl font-bold'>Best Yummy Chips</h2>
                  <p className='text-gray-500 text-xl pt-4'>Starting At</p>
                  <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-8 '>$10</div>
                  <div className='bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer'>Shop Now <BsArrowRight /> {""}
                  </div>
                  </div>
             </div>
             </div>
                      </div>
        </div>
     
     

    
  )
}

export default Hero

import React from 'react'
import banner1 from '../assets/banner__1.png'
import banner2 from '../assets/banner__2.png'

const Banner = () => {
  return (
    <div className='container pt-16 max-w-[1500px]'>
      <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
        <div className='overflow-hidden rounded-lg'>
            <img className='hover:scale-105 transition-transform' src={banner1} alt='banner'/>
        </div>
        <div className='overflow-hidden rounded-lg'>
            <img className='hover:scale-105 transition-transform' src={banner2} alt='banner'/>
        </div>
      </div>
    </div>
  )
}

export default Banner

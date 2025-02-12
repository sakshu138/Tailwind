import React from 'react'
import feature2 from '../assets/feature__2.png'
import ProductCart from './ProductCart'
import product1 from "../assets/product__1.png";
import product3 from "../assets/product__3.png";
import product4 from "../assets/product__4.png";
import product5 from "../assets/product__5.png";

const data=[
    {
        id :0,
        name :"Dried Mango",
        price:"$500",
        img: product1,
    },
    {
        id :1,
        name :"Crunchy crisps",
         price:"$500",
        img:product3,
    },
    {
        id :2,
        name :"jewel cranberries",
        price:"$500",
        img:product4,
    },
    {
        id :3,
        name :"Almond organic",
        price:"$500",
        img:product5
    },
]
const BreakFast = () => {
  return (
    <div className='container pt-16 max-w-[1500px]'>
    <div className='lg:flex justify-between items-center '>
        <div>
            <h3 className='font-medium text-2xl'>Breakfast & Dairy</h3>
            <p className='text-gray-600 mt-2'>Buy nest quality breakfast online from big-basket stop near you.</p>
        </div>
      </div>



      <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>
        <div>
            <img className="w-full h-full object-cover" src={feature2} alt='banner'/>
        </div>
        {
            data.map((e)=>(<ProductCart key={e.id} img={e.img} name={e.name} price={e.price}/>))
        }

      </div>
    </div>
  )
}

export default BreakFast

import React from 'react'
import Blogcard from './Blogcard'
import post1 from '../assets/post__1.png'
import post2  from '../assets/post__2.png'
import post3 from '../assets/post__3.png'

const data=[
    {
        img: post1,
        title:"Healthy Food Healthy Life",
        date:"Aug 25,2023",
        comment:1,
    },
    {
        img: post2,
        title:"Healthy Food Healthy Life",
        date:"Aug 25,2023",
        comment:2,
    },
    {
        img: post3,
        title:"Healthy Food Healthy Life",
        date:"Aug 25,2023",
        comment:3,
    }
   
]

const Blogsection = () => {
  return (
    <div className='container pt-16 max-w-[1500px]'>
        <h2 className='font-bold text-2xl'>Lastest News</h2>
        <p className='text-gray-500'>Present posts in a best way highlight interesting moments of your blog.</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
            {
                data.map((e)=>(<Blogcard key={e.data} img={e.img} title={e.title} data={e.data} comment={e.comment}/> ))
            }
        </div>
      
    </div>
  )
}

export default Blogsection

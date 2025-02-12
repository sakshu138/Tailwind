import CategoryCart from "./CategoryCart"
import category1 from "../assets/category_1.png";
import category2 from "../assets/category_2.png";
import category3 from "../assets/category_3.png";
import category4 from "../assets/category_4.png";
import category5 from "../assets/category_5.png";
import category6 from "../assets/category_6.png";
import category7 from "../assets/category_7.png";
import category8 from "../assets/category_1.png";

const data=[
    {
        id :0,
        name :"Fresh Fruits",
        count:"9 Products",
        img: category1,
    },
    {
        id :1,
        name :"Fresh Vegs",
        count:"8 Products",
        img:category2,
    },
    {
        id :2,
        name :"Fresh Goods",
        count:"7 Products",
        img:category3
    },
    {
        id :3,
        name :"Bread & Bakery",
        count:"6 Products",
        img:category4
    },
    {
        id :4,
        name :"Fishes",
        count:"5 Products",
        img:category5
    },
    {
        id :5,
        name :"Fresh Eges",
        count:"4 Products",
        img:category6
    },
    {
        id :6,
        name :"Fresh Cold drink",
        count:"3 Products",
        img:category7
    },
    {
        id :7,
        name :"Fresh Fruits",
        count:"2 Products",
        img:category8
    }
]
 





const Category = () => {
  return (
    <div className='container pt-16 max-w-[1500px]'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
            data.map((e)=>(<CategoryCart  key={e.id} img={e.img} name={e.name} count={e.count}/>))
        }
    </div>
    </div>
  )
}

export default Category

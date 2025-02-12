interface propsType{
    img:string;
    title:string;
    comment:string;
    data:string;
}



const Blogcard:React.FC<propsType>= ({img,title,comment,data}) => {
  return (
    <div className="space-y-4">
        <img className="rounded-lg hover:scale-105 transition-transform" src={img} alt="post"/>
        <div className="text-accent font-medium">
            <span>{data}</span>
            <span>comment{comment}</span>
        </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}

export default Blogcard

import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import ProductCard from "../ProductCard/ProductCard";


const ProductContainer = ({buttonName}) => {
    
    const location=useLocation()
    
    const [product,setProduct]=useState([])
    const sliceProduct=product.slice(0,9)
    
    useEffect(()=>{
        fetch("/data.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    

    // Conditional show the data 
    let [renderProducts,setRenderProducts]=useState([])
   
    // Condition-wise, show the data start 
    useEffect(()=>{
        
    if(buttonName === "All product"){
       toast("Here are all the products")
       
        setRenderProducts(product.map((item,idx)=><ProductCard key={idx} item={item}></ProductCard>))
       
    }
    else if(buttonName === "Home"){
        toast("Here are home page ")
        setRenderProducts(sliceProduct.map((item,idx)=><ProductCard key={idx} item={item}></ProductCard>)) 
    }
    else if(buttonName === "Laptop"){
        toast("Here are Laptop")
        const laptop=product.filter((item,)=>item.category === "Laptop")
        setRenderProducts(laptop.map((item,idx)=><ProductCard item={item} key={idx}></ProductCard>))
       }
       else if(buttonName === "Phone"){
        toast("Here are Phone")
        const laptop=product.filter((item,)=>item.category === "Phone")
        setRenderProducts(laptop.map((item,idx)=><ProductCard item={item} key={idx}></ProductCard>))
       }
       else if(buttonName === "Accessories"){
        toast("Here are Accessories")
        const laptop=product.filter((item,)=>item.category === "Accessories")
        setRenderProducts(laptop.map((item,idx)=><ProductCard item={item} key={idx}></ProductCard>))
       }
       else if(buttonName === "Smart watches"){
        toast("Here are Smart watches")
        const laptop=product.filter((item,)=>item.category === "Smart watches")
        setRenderProducts(laptop.map((item,idx)=><ProductCard item={item} key={idx}></ProductCard>))
       }
       else if(buttonName === "Mac Book"){
        toast("Here are Smart Mac Book")
        const laptop=product.filter((item,)=>item.category === "Mac Book")
        setRenderProducts(laptop.map((item,idx)=><ProductCard item={item} key={idx}></ProductCard>))
       }
       else if(buttonName === "I phone"){
        toast("Here are Smart I phone")
        const laptop=product.filter((item,)=>item.category === "I phone")
        setRenderProducts(laptop.map((item,idx)=><ProductCard item={item} key={idx}></ProductCard>))
       }

    },[buttonName])
    // Condition-wise, show the data End
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
            
           {
             buttonName ?renderProducts: sliceProduct.map((item,idx)=><ProductCard key={idx} item={item}></ProductCard>)
           }
           <ToastContainer/>
            
        </div>
         
    );
};

export default ProductContainer;
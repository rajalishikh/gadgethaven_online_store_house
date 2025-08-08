import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import ProductCard from "../ProductCard/ProductCard";


const ProductContainer = ({buttonName}) => {
    
    const location=useLocation()
    console.log("My Location",location)
    const [product,setProduct]=useState([])
    const sliceProduct=product.slice(0,9)
    console.log("here is my 9 product",sliceProduct)
    useEffect(()=>{
        fetch("../../../public/data.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    console.log("Here us gadget data ",product)

    // Conditional show the data 
    let [renderProducts,setRenderProducts]=useState([])
    console.log("MY butto",renderProducts)

    useEffect(()=>{
        
    if(buttonName === "All product"){
       toast("Here is you all products")
       
        setRenderProducts(product.map((item,idx)=><ProductCard key={idx} item={item}></ProductCard>))
       
    }
    else if(buttonName === "Home"){
        toast("Here is you home page ")
        setRenderProducts(sliceProduct.map((item,idx)=><ProductCard key={idx} item={item}></ProductCard>)) 
    }

    },[buttonName])
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
            
           {
             buttonName ?renderProducts: sliceProduct.map(item=><ProductCard item={item}></ProductCard>)
           }
           <ToastContainer/>
            
        </div>
    );
};

export default ProductContainer;
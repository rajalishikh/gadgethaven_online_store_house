import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductContainer = () => {
    const [product,setProduct]=useState([])
    const sliceProduct=product.slice(0,9)
    console.log("here is my 9 product",sliceProduct)
    useEffect(()=>{
        fetch("../../../public/data.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    console.log("Here us gadget data ",product)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-2">
           {
            product.map(item=><ProductCard item={item}></ProductCard>)
           }
            
        </div>
    );
};

export default ProductContainer;
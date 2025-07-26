import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductContainer = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch("../../../public/data.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    console.log("Here us gadget data ",product)
    return (
        <div className="grid grid-cols-3 gap-2">
           {
            product.map(item=><ProductCard item={item}></ProductCard>)
           }
            
        </div>
    );
};

export default ProductContainer;
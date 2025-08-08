import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useLocation } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
const notify = () => toast('Here is your toast.');

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

    let renderProducts;
    if(buttonName === "All product"){
       
        renderProducts=product.map(item=><ProductCard item={item}></ProductCard>)
       
    }
    else if(buttonName = "Home"){
        renderProducts = sliceProduct.map(item=><ProductCard item={item}></ProductCard>)
    }
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
            
           {
             buttonName ?renderProducts: sliceProduct.map(item=><ProductCard item={item}></ProductCard>)
           }
            
        </div>
    );
};

export default ProductContainer;
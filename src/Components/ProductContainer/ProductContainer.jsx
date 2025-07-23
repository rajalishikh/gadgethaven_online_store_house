import { useEffect, useState } from "react";

const ProductContainer = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch("../../../public/data.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    console.log("Here us gadget data ",product)
    return (
        <div>
            <h2>{product.length}</h2>
            
        </div>
    );
};

export default ProductContainer;
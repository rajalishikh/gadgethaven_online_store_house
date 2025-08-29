import { useState } from "react";

import { NavLink } from "react-router-dom";
import ProductContainer from "../ProductContainer/ProductContainer";


const AllProduct = () => {
    const [buttonName,setButtonName]=useState("")
    const handleButton=(e)=>{
       
        setButtonName(e.target.innerText)
       

    }
    
    return (
        <div  className="flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row gap-6 border sm:justify-center m-2">
            <div className="bg-[#FFFFFF] p-2 rounded-xl flex justify-center h-[470px]">
                {/* Product Button */}
               <div >
                 <NavLink to={"/"} ><button onClick={(e)=>handleButton(e)} className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Home</button><br /></NavLink>
                 <button onClick={(e)=>handleButton(e)} className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">All product</button><br />
                 <button onClick={(e)=>handleButton(e)} className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Laptop </button><br />
                 <button onClick={(e)=>handleButton(e)} className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Phone</button><br />
                 <button onClick={(e)=>handleButton(e)} className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Accessories</button><br />
                 <button onClick={(e)=>handleButton(e)} className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Smart watches </button><br />
                 <button onClick={(e)=>handleButton(e)} className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Mac Book </button><br />
                 <button onClick={(e)=>handleButton(e)} className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">I phone </button><br />
                 
                 
               </div>
            </div>
            {/* product container  */}
            <div>
                <ProductContainer buttonName={buttonName}></ProductContainer>
            </div>
            
        </div>
    );
};

export default AllProduct;
import { useEffect, useState } from "react";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { ToastContainer } from 'react-toastify';
import { getStoreCard } from "../DashBoard/lss";
import Dbsd from "../DashBoardSaveData/Dbsd.jsx";

const Cart = () => {
      const saveData=getStoreCard()
      const [price,setPrice]=useState(0)
      const [itemCard,setItemCard]=useState([])

//  set the local storage price in state 
      useEffect(()=>{
        setItemCard(saveData)
 
      },[])
      

      // show the price when the state update .The part is for full price 
      useEffect(()=>{
         
        const saveDataLs=itemCard.map(item=>item.price)
       
        let totalPrice=saveDataLs.reduce((previousValue,currentValue)=>{
          return previousValue+currentValue},
          0)
          setPrice(totalPrice)
        
       
      },[itemCard])
      
      
      
     
      
      
      
       return (
        <div>
            <div className="lg:ml-24 lg:mr-24 mt-10">
            
           

            {/* heading part of container  */}
            <div className="lg:flex md:flex lg:justify-between md:justify-between sm:justify-center mb-8">
              <div className=""><h3 className="text-black  text-xl font-bold text-center">Cart</h3></div>
              <div className="flex gap-2">
                <div><p className="lg:text-xl font-bold text-black">Total Coast:<span>{price}</span> </p></div>
                <div className="flex">
                     <button className="flex border border-[#8332C5] p-2 rounded-xl text-sm text-[#8332C5] hover:text-white hover:bg-[#8332C5] mr-2 lg:w-36 font-bold">Short by price <FaArrowUpShortWide className="h-6 ml-2" /> </button>
                      <button className="border border-[#8332C5] p-2 rounded-xl text-sm text-[#8332C5] hover:text-white hover:bg-[#8332C5]  lg:w-36 font-bold">Purchase</button>
                </div>
                
               

              </div>

            </div>
            {/* heading part end  of container  */}
            {/* div for heading  */}
            {
              itemCard.map((item,idx)=><Dbsd key={idx} setItemCard={setItemCard} saveData={item}></Dbsd>)
            }
           
          </div>
          <ToastContainer/>
            
        </div>
    );
};

export default Cart;
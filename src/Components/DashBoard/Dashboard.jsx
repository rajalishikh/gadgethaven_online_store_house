import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import './Dash.css';

const Dashboard = () => {
  const [state,setState]=useState(true)
  const handleClick=()=>{
    setState(true)
   

  }
  const handleClick2=()=>{
    setState(false)

  }
  console.log(state)

  
  return (
        <div>
          {/* NavBar Section Start */}
             <div id="my_banner" className="navbar  bg-[#FFFFFF] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#9538E2] rounded-box z-[1] mt-3 w-52 p-2 shadow ">
          
      <li> <NavLink to={"/"} className={({isActive})=>isActive?"Active ":"nonActive" }>Home</NavLink></li>
      <li><NavLink to={"/static"} className={({isActive})=>isActive?"Active ":"nonActive" }>Static</NavLink></li>
      <li><NavLink to={"/dashBoard"} className={({isActive})=>isActive?"Active":"nonActive" }>DashBoard</NavLink></li>
        
     
     
    
      </ul>
    </div>
    <a className=" text-xl font-bold">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <NavLink to={"/"} className={({isActive})=>isActive?"Active":"nonActive" }>Home</NavLink></li>
      <li><NavLink to={"/static"} className={({isActive})=>isActive?"Active":"nonActive" }>Static</NavLink></li>
      <li><NavLink to={"/dashBoard"} className={({isActive})=>isActive?"Active":"nonActive" }>DashBoard</NavLink></li>
      
      
    
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <div className="text-black bg-white p-2 rounded-full">
        <FaRegHeart />
    </div>
    <div className="bg-white p-2 rounded-full">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    </div>
         
    
  </div>
             </div>
          {/*  NavBar section End  */}
          {/* banar section start  */}
          <div className="min-h-[300px] lg:min-h-[300px] bg-[#9538E2] ">
              
                
             <div className="pt-6">
                <div>
            <h2 className="text-[#FFFFFF] font-bold text-2xl lg:text-3xl md:text-3xl  text-center ">DashBoard</h2>
            <p className="text-[#FFFFFF] text-center mt-5">Explore the lates t gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
               </div>

               {/* Button Section  */}
               <div className="flex justify-center gap-2 mt-9">
                <NavLink onClick={()=>handleClick()} 
                 className= {state?  "bg-white text-[#9538E2]  border-2 border-[#FFFFFF] w-[150px] font-extrabold text-center rounded-xl p-2" :" border-2 border-[#FFFFFF] w-[150px] font-extrabold text-center rounded-xl p-2 text-white "  }    to={"/dashBoard"}>
                <button > Cart</button>
                </NavLink>
                

                <NavLink  onClick={()=>handleClick2()}  className={state?" border-2 border-[#FFFFFF] w-[150px] font-extrabold text-center rounded-xl p-2 text-white": "bg-white text-[#9538E2]  border-2 border-[#FFFFFF] w-[150px] font-extrabold text-center rounded-xl p-2"}   to={"wishlist"}> 
                <button  > Wish LIst</button>
                </NavLink>
                
               </div>
            </div>
              
                

          </div>
          {/* banar section end  */}
          <Outlet></Outlet>

          
           
            
            
        </div>
    );
};

export default Dashboard;
import { Helmet } from "react-helmet-async";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './st.css';

const Static = () => {
  const loader=useLoaderData()
  console.log(loader)
  
   return (
        <div>
          <Helmet>
            <title>StaticPage</title>
          </Helmet>
          {/* NavBar Section  */}
           <div id="my_banner" className="navbar text-[#0B0B0B] bg-[#FFFFFF] ">
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
        className="menu menu-sm dropdown-content bg-[#9538E2] rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#0B0B0B]">
          
      <li> <NavLink to={"/"} className={({isActive})=>isActive?"Active ":"nonActive" }>Home</NavLink></li>
      <li><NavLink to={"/static"} className={({isActive})=>isActive?"Active ":"nonActive" }>Static</NavLink></li>
      <li><NavLink to={"/dashBoard"} className={({isActive})=>isActive?"Active":"nonActive" }>DashBoard</NavLink></li>
        
     
     
    
      </ul>
    </div>
    <a className=" text-xl font-bold">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#0B0B0B]">
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
           {/* NavBar body content section  */}
           <div className="min-h-[300px] lg:min-h-[300px] bg-[#9538E2] ">
              
                
             <div className="pt-6">
                <div>
            <h2 className="text-[#FFFFFF] font-bold text-2xl lg:text-3xl md:text-3xl  text-center ">Statistics</h2>
            <p className="text-[#FFFFFF] text-center mt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
               </div>

               
            </div>
              
                

          </div>
          {/* NavBar Full section  */}

          <div className="w-full h-[600px]">
            <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={Array.isArray(loader) ? loader : []}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" stackId="a" fill="#8884d8" />
        <Bar dataKey="rating" stackId="a" fill="#82ca9d" />
      </BarChart>
          </ResponsiveContainer>
           

          </div>
            
        </div>
    );
};

export default Static;
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToLs } from "../DashBoard/lss";
const Pdc = ({data,fullData}) => {

  
    const {id,category,name,specification,price,rating,image,details}=data

    // function for save the data in local Storage 

    const handleSaveLs=()=>{
      
      const findDataById=fullData.find(item=>item.id === id)
      console.log("Save data",findDataById)
      addToLs(findDataById)
    
    }
    
    
    return (
        <div className="border-2 border-white p-4 bg-[#FFFFFF4D] rounded-xl">
           <div className=" card lg:card-side bg-base-100 shadow-xl 
           md:w-[725px]
           lg:w-[1000px]
           xl:w-[1100px] lg:h-[511px]
        
           
           ">
  <figure className="border-4 m-5 border-[#9538E2]">
    <img
    
      src={image}
      alt="dynamic image " />
  </figure>
  <div className="mt-4 p-2">
    <h2 className="card-title font-semibold text-2xl">{name}</h2>
    <p className="text-[#09080FCC] text-2xl">Price :{price}.00$</p>
    <button className="border border-[#309C08] text-[#309C08]  text-sm font-medium p-1 rounded-xl bg-[#309C081A]">In Stock </button>
    <p className="text-[#09080F99] text-sm">{specification}</p>
    {
      details?<div><p className="text-bold text-black font-bold">Specification</p>
    <p className="text-[#09080F99] text-sm">RAM:  {details ? details[0].ram : "NO Information to Show"}</p>
    <p className="text-[#09080F99] text-sm">ROM:{details ? details[1].rom : "NO Information to Show"}</p>
    <p className="text-[#09080F99] text-sm">Scree : {details ? details[2].scree: "NO Information to Show"}</p>
    <p className="text-[#09080F99] text-sm">Warranty : {details ? details[3].warranty: "NO Information to Show"}</p>
    <p className="text-[#09080F99] text-sm">{details ? details[3].madeIn: "NO Information to Show"}</p></div>:"NO more Specification is Available"
    }
    <p className="text-black">Ratting <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" /> </p>
    <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-7"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  
</div><span className="text-black">{rating}</span><br />

<div className="flex mt-4">
  <div className="text-white bg-[#9538E2] p-2 rounded-xl  flex justify-center">
    {/* Save data in LocalStorage */}

  <Link>
    <button  onClick={()=>handleSaveLs()} >Add to Cart </button>
  </Link>



  <div className="ml-2 text-xl mt-1" >
    <FaShoppingCart />
  </div>
</div>
<div className="ml-3   border-2 border-[#09080F0D] rounded-full p-3">
  <FaRegHeart />
</div>
</div>



    
  </div>
           </div>
            
            
        </div>
    );
};

export default Pdc;
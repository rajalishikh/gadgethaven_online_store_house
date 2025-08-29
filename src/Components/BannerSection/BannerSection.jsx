import { useNavigate } from "react-router-dom";

const BannerSection = () => {
    const navigate=useNavigate()
    const handleShop=()=>{
        navigate("/AllProduct")

    }
    return (
        <div>
            <h2 className="text-[#FFFFFF] font-bold text-2xl lg:text-7xl md:text-3xl  text-center ">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
            <p className="text-[#FFFFFF] text-center mt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>

           <div className="flex justify-center mt-3">
            <div>
                 <button onClick={()=>handleShop()} className="bg-white text-[#9538E2] p-3 rounded-full font-bold w-40 hover:bg-[#00000033] hover:text-white">Shop Now</button>
            </div>
           </div>
        </div>
    );
};

export default BannerSection;
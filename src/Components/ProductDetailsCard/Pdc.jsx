
const Pdc = ({data}) => {
    const {id,category,name,specification,price,rating,image,details}=data
    
    return (
        <div className="className='border-2 border-white p-4 bg-[#FFFFFF4D] rounded-xl  ">
           <div className="card lg:card-side bg-base-100 shadow-xl 
           md:w-[725px]
           lg:w-[1000px]
           xl:w-[1100px] lg:h-[511px]
        
           
           ">
  <figure className="border-4 m-5 border-[#9538E2]">
    <img
    
      src={image}
      alt="dynamic image " />
  </figure>
  <div className="mt-4">
    <h2 className="card-title font-semibold text-2xl">{name}</h2>
    <p className="text-[#09080FCC] text-2xl">Price :{price}.00$</p>
    <button className="border border-[#309C08] text-[#309C08]  text-sm font-medium p-1 rounded-xl bg-[#309C081A]">In Stock </button>
    <p className="text-[#09080F99] text-sm">{specification}</p>
    <p className="text-[#09080F99] text-sm">{details}</p>
    
  </div>
</div>
            
            
        </div>
    );
};

export default Pdc;
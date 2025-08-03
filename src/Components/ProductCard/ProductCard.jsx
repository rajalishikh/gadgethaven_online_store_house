import { useState } from 'react';
import { Link } from 'react-router-dom';
import error from '../../Image/12085308_20944135.jpg';
const ProductCard = ({item}) => {
    const {id,category,name,specification,price,rating,image}=item
    const [stateTrue,setTrue]=useState(true)
    

    const handleHIdden=()=>{
      const addHidden=setHidden(false)


    }
    return (
        <div>
            <div className="card bg-base-100 lg:w-90 md:h-[400px] xl:h-[400px] 2xl:h-[400px] lg:h-[400px] shadow-xl hover:scale-105">
  <figure className="px-5 pt-2">
    <img
    
      src={image}
      onError={(e) => {
      e.target.onerror = null; 
      e.target.src = error;
      setTrue(false)

         
  }}
  
      alt="Image"
      className="rounded-lg w-full  h-full "  />
  </figure>
  <div className="card-body ">
    <h2 className="card-title font-bold justify-start">{stateTrue?`${name}`:"Image link is not working Properly "}</h2>
    <p className='text-xl'>Price :{price}</p>
    <div>
     <Link to={'/productDetails'} >  <button  className="border border-[#9538E2] p-2 rounded-xl text-[#9538E2] btn hover:bg-[#9538E2] hover:text-white">View Details</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductCard;
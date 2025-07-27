import { useState } from 'react';
import error from '../../Image/12085308_20944135.jpg';
const ProductCard = ({item}) => {
    const {id,category,name,specification,price,rating,image}=item
    const [stateTrue,setTrue]=useState(true)
    return (
        <div>
            <div className="card bg-base-100 lg:w-90 md:h-[400px] xl:h-[400px] 2xl:h-[400px] lg:h-[400px] shadow-xl hover:scale-105">
  <figure className="px-10 pt-10">
    <img
      src={image}
      onError={(e) => {
      e.target.onerror = null; 
      e.target.src = error;
      setTrue(false)
         
  }}
  
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{stateTrue?`${name}`:"Image link is not working Properly "}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductCard;
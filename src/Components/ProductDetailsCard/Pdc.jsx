
const Pdc = ({data}) => {
    const {id,category,name,specification,price,rating,image}=data
    return (
        <div className="className='border-2 border-white p-4 bg-[#FFFFFF4D] rounded-xl  ">
           <div className="card lg:card-side bg-base-100 shadow-xl 
           md:w-[725px]
           lg:w-[1000px]
           xl:w-[1100px] lg:h-[511px]
        
           
           ">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
            
            
        </div>
    );
};

export default Pdc;
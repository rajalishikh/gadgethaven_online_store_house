
const ProductCard = ({item}) => {
    const {id,category,name,specification,price,rating,image}=item
    return (
        <div>
            <div className="card bg-base-100 lg:w-90 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
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
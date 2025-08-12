
const BuyProduct = ({item}) => {
    const {id,category,name,specification,price,rating,image,details}=item
    return (
        <div>
            <img src={image} alt=""  />
            
        </div>
    );
};

export default BuyProduct;
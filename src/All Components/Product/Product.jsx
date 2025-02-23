
import PropTypes from 'prop-types';
import './Product.css'
const Product = ({product,handleCartProducts,handleIncreasedPrice}) => {
  
    // console.log(handleCartProducts);
    const {img,name,description,price} = product;

    
    return (
        <div className='single-product'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='p-img'
                    src={img}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end items-center">
                        <p className='font-bold'>Price : {price} $</p>
                    <button onClick={()=>{handleCartProducts(product);handleIncreasedPrice(price)}}  className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes={
    product : PropTypes.object,
    handleCartProducts: PropTypes.func,
    handleIncreasedPrice: PropTypes.func
}
export default Product;
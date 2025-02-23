
import { useEffect, useState } from 'react'
import Product from '../Product/Product';
import PropTypes from 'prop-types';
const All_Products = ({handleCartProducts,handleIncreasedPrice}) => {
     const[products,setProducts] = useState([]);

  useEffect(()=>
  {
    fetch('fakeData.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  }
    ,[]);

    // console.log(handleCartProducts);
    
    return (
        <div>
            <h1>All Products</h1>
            {
                //   products.map(product=>console.log(product))
                products.map(product => <Product handleCartProducts={handleCartProducts} key={product.id} handleIncreasedPrice={handleIncreasedPrice} product={product}></Product>)
            }
            
        </div>
    );
};

All_Products.propTypes = {
    handleCartProducts: PropTypes.func,
    handleIncreasedPrice: PropTypes.func,
}
export default All_Products;
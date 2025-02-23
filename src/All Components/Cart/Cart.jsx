import './Cart.css'
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
const Cart = ({p, handledecreasedPrice}) => {
    // console.log(p);

    const {id,img,name,price} = p;
    return (
        <div className="cartProducts text-center grid grid-cols-4 my-6 items-center">
            

            <img  src={img} alt="" />
            <p>{name}</p>
            <p>{price} $</p>
            <button className='text-3xl' onClick={()=>handledecreasedPrice(price,id)}><MdDelete /></button>
        </div>
    );
};

Cart.propTypes ={
    p: PropTypes.obj,
    handledecreasedPrice: PropTypes.func
}

export default Cart;
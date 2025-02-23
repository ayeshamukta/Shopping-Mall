import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
import About from "../About/About";

const Cart_Container = ({handleActiveBtn,active,cartProducts,handledecreasedPrice}) => {

    // console.log(active);
    return (
        <div className="text-center">
            <h1>Cart container</h1>
            <div className="space-x-20">

                
                <button onClick={()=>handleActiveBtn('cart')}  className={`${active.buttonStatus?"btn btn-primary": "btn"}`}>Cart</button>
                <button onClick={()=>handleActiveBtn('about')} className={`${active.buttonStatus?"btn": "btn btn-primary"}`}>About</button>

                {active.cart=='cart'?cartProducts.map(p=><Cart p={p} handledecreasedPrice={handledecreasedPrice} key={p.id}></Cart>): <About></About> }
                    
            
                
            </div>
        </div>
    );
};

Cart_Container.propTypes = 
{
    handleActiveBtn: PropTypes.func,
    active: PropTypes.object,
    cartProducts: PropTypes.array,
    handledecreasedPrice: PropTypes.func
}
export default Cart_Container;
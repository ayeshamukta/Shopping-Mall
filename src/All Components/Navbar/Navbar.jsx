
import PropTypes from "prop-types";
const Navbar = ({cartProducts,navPrice}) => {
    return (
        <div>
            <div className="navbar bg-base-100">
              <div className="flex-1">
                <a className="px-2 font-semibold text-xl">Shopping Mall</a>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  <li><a>Home</a></li>
                  <li><a>Product</a></li>
                  <li><a>Cart {cartProducts}</a></li>
                  <li><p>Total Amount : {navPrice} BDT</p></li>
                  
                </ul>
              </div>
            </div>
        </div>
    );
};
Navbar.propTypes = {
  cartProducts: PropTypes.number,
  navPrice: PropTypes.number,
}
export default Navbar;
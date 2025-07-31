import { Link } from "react-router";
function CartIconImg({style}) {
	return (
         <div className={`${style}`}>
           <Link to="/cart">
              <img className="w-full h-full object-contain" src="./images/cart.png" alt="cart-icon" />
           </Link>
         </div>
		)
}

export default CartIconImg;
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartCoupon from "./CartCoupon";
import CartTotal from "./CartTotal";
import CartRouteLinks from "./CartRouteLinks";
import CartProduct from "./CartProduct";
function Cart() {
	return (
          <div>
          	 <Header/>
          	 <Navbar/>
          	 <CartRouteLinks/>
          	 <CartProduct/>
          	 <div className="grid grid-cols-1 max-w-full md:grid-cols-7 gap-20 m-4 md:m-16">
          	 	 <CartCoupon/>
          	 	 <CartTotal/>
          	 </div>
          	<Footer/>
          </div>
		)
}

export default Cart;

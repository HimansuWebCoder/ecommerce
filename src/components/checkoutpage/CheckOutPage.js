import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BillingDetails from "../ui/BillingDetails";
import CheckOutPlaceOrder from "../ui/CheckOutPlaceOrder";
import CheckoutPageRouterLinks from "../ui/CheckoutPageRouterLinks";
function CheckOutPage() {
	return (
          <div>
          	<Header/>
          	<Navbar/>
          	<div className="grid grid-cols-1 m-4 md:m-14">
	          	<CheckoutPageRouterLinks/>
	          	<div className="grid grid-cols-1 md:grid-cols-2">
	          	  <BillingDetails/>
	          	  <CheckOutPlaceOrder/>
	          	</div>
          	</div>
          	<Footer/>
          </div>
		)
}

export default CheckOutPage;

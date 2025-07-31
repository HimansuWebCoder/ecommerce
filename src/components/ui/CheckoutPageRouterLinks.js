import {Link} from "react-router";
function CheckoutPageRouterLinks() {
	return (
         <div className="flex gap-2 md:text-base text-sm  max-w-full flex-wrap">
          	 <div className="font-poppins">
          		<Link>Account</Link>
          	 </div>
          		<div>/</div>
          	 <div className="font-poppins">
          		<Link>My Account</Link>
          	 </div>
          		<div>/</div>
          	  <div className="font-poppins">
          		<Link>Product</Link>
          	  </div>
          		<div>/</div>
          	  <div>
          		<Link className="font-poppins">View Cart</Link>
          	  </div>
          		<div>/</div>
          	  <div>
          		<Link className="font-medium font-poppins">CheckOut</Link>
          	  </div>
          	</div>
		)
}

export default CheckoutPageRouterLinks;

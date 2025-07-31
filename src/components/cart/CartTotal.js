import Button from "../ui/Button";
function CartTotal() {
	return (
          <div className="border  md:col-span-3 rounded-lg p-4 border-gray-600">
             <div>
             	<h1 className="font-medium font-poppins text-xl">Cart Total</h1>
             </div>
          	<div className="flex flex-col gap-4 mt-5  w-full">
	          	  	  	 <div className="flex justify-between ">
	          	  	  	 	<h3 className="font-poppins">SubTotal:</h3>
	          	  	  	 	<h3 className="font-poppins">$1750</h3>
	          	  	  	 </div>
	          	  	  	 <hr className=""/>
	          	  	  	 <div className="flex justify-between ">
	          	  	  	 	<h3 className="font-poppins">Shipping:</h3>
	          	  	  	 	<h3 className="font-poppins">Free</h3>
	          	  	  	 </div>
	          	  	  	 <hr className=""/>
	          	  	  	 <div className="flex justify-between ">
	          	  	  	 	<h3 className="font-poppins">Total:</h3>
	          	  	  	 	<h3 className="font-poppins">$1750</h3>
	          	  	  	 </div>
	          	  	  </div>
	          	  	  <div className="w-full  flex m-2 justify-center">
			          	  <div className="w-fit text-xs md:text-xl">
			          	 	<Button name="Proceed to checkout"/>
			          	  </div>
	          	      </div>
          </div>
		)
}

export default CartTotal;

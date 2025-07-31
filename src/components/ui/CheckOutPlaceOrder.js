import Item from "./Item";
import CheckType from "./CheckType";
import Button from "./Button";
function CheckOutPlaceOrder() {
	return (
          <div className="max-w-full">
          	  <div className="grid grid-cols-1  gap-2 mt-12 place-items-center">
          	   <div className="flex flex-col w-full">
          	  	 <Item image="./images/gamepad.png" altImg="gamepad" name="LCD Monitor" price="$650"/>
          	  	 <Item image="./images/gaming-monitor.png" altImg="monitor" name="H1 Gamepad" price="$1100"/>
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
	          	 {/*bank details choose*/}
	          	 <div className="grid grid-cols-1 gap-2 w-full">
	          	 <div className="flex justify-between gap-3">
	          	 	 <div className="flex gap-2">
	          	 	 	<div>
	          	 	 	    <CheckType width="5" height="5" checktypename="radio" name="payment" />
	          	 	    </div>
		          	 	 <div className="font-poppins">
		          	 	 	Bank
		          	 	 </div>
	          	 	</div>
          	 	 <div className="grid grid-cols-4 gap-4">
          	 	 	<div>
          	 	 		<img className="w-full h-full object-contain" src="./images/Bkash.png" alt="" />
          	 	 	</div>
          	 	 	<div>
          	 	 		<img className="w-full h-full object-contain" src="./images/Visa.png" alt="" />
          	 	 	</div>
          	 	 	<div>
          	 	 		<img className="w-full h-full object-contain" src="./images/Mastercard.png" alt="" />
          	 	 	</div>
          	 	 	<div>
          	 	 		<img className="w-full h-full object-contain" src="./images/Nagad.png" alt="" />
          	 	 	</div>
	          	 	 </div>
	          	 </div>
	          	 	 <div className="flex justify-start gap-2">
	          	 	 	<CheckType width="5" height="5" bgColor="[#DB4488]" checktypename="radio" name="payment" />
	          	 	 	<div className="font-poppins">Cash on delivery</div>
	          	 	 </div>
	          	 </div>

	          	 <div className="w-full  flex justify-between items-center gap-4">
	          	    <div className="border rounded basis-[60%]">
	          	      {/*<input className={`accent-[black-500] w-[200px] p-2 focus:outline-none h-full`} placeholder="Coupon Code" type="text" name="couponcode" />*/}
	          	     <CheckType placeholder="Coupon Code" padding="2" checktypename="text" name="couponcode" />
	          	    </div>
	          	    <div className="flex justify-center items-center min-h-fit basis-[35%] md:basis-[40%]">
	          	      <div className=" md:text-xl text-xs w-full">
   	          	 	    <Button name="Apply Coupon"/>
	          	      </div>
	          	    </div>
	          	 </div>
	          	 <div className="w-full  flex m-2 justify-start">
	          	  <div className="w-[10rem] text-xs md:text-xl">
	          	 	<Button name="Place Order"/>
	          	  </div>
	          	 </div>
          	  </div>
          </div>
		)
}

export default CheckOutPlaceOrder;

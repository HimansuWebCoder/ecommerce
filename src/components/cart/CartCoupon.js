import Button from "../ui/Button";
import ButtonComp from "../ui/ButtonComp";
import CheckType from "../ui/CheckType";
function CartCoupon() {
	return (
          <div className="col-span-1 md:col-span-4">
          	 <div className="w-full md:flex justify-between items-center gap-4">
	          	    <div className="border rounded basis-[60%] border-gray-600">
	          	      {/*<input className={`accent-[black-500] w-[200px] p-2 focus:outline-none h-full`} placeholder="Coupon Code" type="text" name="couponcode" />*/}
	          	     <CheckType placeholder="Coupon Code" padding="2" checktypename="text" name="couponcode" />
	          	    </div>
	          	    <div className="flex mt-4 md:mt-0 justify-center items-center min-h-fit basis-[35%] md:basis-[40%]">
	          	      <div className="md:text-xl text-xs w-full">
   	          	 	    <Button name="Apply Coupon"/>
   	          	 	    {/*<ButtonComp name="Apply Coupon" />*/}
	          	      </div>
	          	    </div>
	          	 </div>
          </div>
		)
}

export default CartCoupon;

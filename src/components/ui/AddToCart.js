import CartIconImg from "./CartIconImg";
function AddToCart({isCartShow, isCartIconShow}) {
	return (

		<div className="w-full">
			{isCartShow || isCartIconShow ? (
					<div className="w-full bg-black rounded md:p-1 p-1 absolute bottom-0 left-0 text-sm md:text-xl font-medium text-white text-center">
					       {isCartIconShow ? (
					       	// <div className="grid grid-cols-6 border place-content-center place-items-center">
					       	<div className="flex justify-center items-center gap-2">
						       <CartIconImg style="rounded-lg h-fit" />
		           	           <button className="">Add To Cart</button>
	           	           </div>
	           	           ) : (
		           	           <button>Add To Cart</button>
	           	           )
                             
					        }
				    </div>
           	   ) : null}
		</div>
		)
}

export default AddToCart;

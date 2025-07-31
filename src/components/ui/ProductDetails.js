import Button from "./Button";
import Counter from "./Counter";
import { IoMdHeartEmpty } from "react-icons/io";
function ProductDetails() {
   return (
       <div className="gap-6 grid grid-cols-1 md:grid-cols-8 max-w-full m-4 md:m-14">
       	   <div className="grid grid-cols-4 col-span-4 gap-4">
       	       <div className="grid grid-cols-1 col-span-1 gap-2">
	       	   	  <div className="w-full bg-[#F5F5F5] h-full p-2 rounded-md">
	       	   	  	<img className="w-full h-full object-contain" src="./images/productimg1.png" alt="" />
	       	   	  </div>
	       	   	  <div className=" w-full bg-[#F5F5F5] h-full p-2 rounded-md">
	       	   	  	<img className="w-full h-full object-contain" src="./images/productimg2.png" alt="" />
	       	   	  </div>
	       	   	  <div className=" w-full bg-[#F5F5F5] h-full p-2 rounded-md">
	       	   	  	<img className="w-full h-full object-contain" src="./images/productimg3.png" alt="" />
	       	   	  </div>
	       	   	  <div className=" w-full bg-[#F5F5F5] h-full p-2 rounded-md">
	       	   	  	<img className="w-full h-full object-contain" src="./images/productimg4.png" alt="" />
	       	   	  </div>
       	       </div>
       	   	  <div className="grid grid-cols-1 col-span-3 bg-[#F5F5F5] h-full p-2 rounded-md">
       	   	  	  <img className="w-full h-full object-contain" src="./images/mainproductimg.png" alt="" />
       	   	  </div>
       	   </div>
       	 {/*products details section side start*/}
       	   <div className="col-span-4 grid gap-4">
       	   	  <div>
       	   	  	<h2 className="text-2xl font-bold font-inter">Havic HV G-92 Gamepad</h2>
       	   	  </div>
       	   	  <div className="grid grid-cols-6 md:grid-cols-9 place-content-start place-items-center ">
       	   	  	  <div className=" grid grid-cols-5 col-span-1 gap-4">
       	   	  	  	 <div className="w-5 h-5">
       	   	  	  	 	<img className="w-full h-full object-contain" src="./images/star.png" alt="" />
       	   	  	  	 </div>
       	   	  	  	 <div className="w-5 h-5">
       	   	  	  	 	<img className="w-full h-full object-contain" src="./images/star.png" alt="" />
       	   	  	  	 </div>
       	   	  	  	 <div className="w-5 h-5">
       	   	  	  	 	<img className="w-full h-full object-contain" src="./images/star.png" alt="" />
       	   	  	  	 </div>
       	   	  	  	 <div className="w-5 h-5">
       	   	  	  	 	<img className="w-full h-full object-contain" src="./images/star.png" alt="" />
       	   	  	  	 </div>
       	   	  	  	 <div className="w-5 h-5">
       	   	  	  	 	<img className="w-full h-full object-contain" src="./images/empty-star.png" alt="" />
       	   	  	  	 </div>
       	   	  	  </div>
       	   	  	  <div className="font-poppins text-gray-500 col-span-3">
       	   	  	  	(150 Reviews)
       	   	  	  </div>
       	   	  	  <div className="text-green-400  p-2 border-l-2 col-span-2">
       	   	  	  	  In Stock
       	   	  	  </div>
       	   	  </div>
       	   	  <div className="">
       	   	  	<h2 className="font-poppins text-2xl">$192.00</h2>
       	   	  </div>
       	   	  <div className="">
       	   	  	<p className="font-poppins">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
       	   	  </div>
       	   	  <div className="">
       	   	  	<hr/>
       	   	  </div>
       	   	  <div className="grid grid-cols-2">
       	   	  	 <div className=" flex gap-2 justify-start items-center">
       	   	  	 	{/*<label name="color">Colours:</label>*/}
       	   	  	    <div className="text-lg font-medium">Colours:</div>
       	   	  	 	<input name="color" className="w-4 h-4" type="radio" id="color" />
       	   	  	 	<input name="color" className="w-4 h-4 accent-[#E07575] border-green-500" type="radio" id="color" />
       	   	  	 </div>
       	   	  </div>
       	   	  <div className="grid grid-cols-1 md:grid-cols-2 ">
       	   	  	  <div className="grid grid-cols-10  max-w-full place-content-center">
       	   	  	  	  <div className="col-span-2 text-lg font-medium">Size:</div>
	       	   	  	  <div className="grid w-full place-content-center gap-2 col-span-8 grid-cols-5">
	       	   	  	  	 <div className="w-8 h-fit border grid grid-cols-1 rounded-lg border-black place-content-center place-items-center  text-lg font-base">XS</div>
	       	   	  	  	 <div className="w-8 h-fit border grid grid-cols-1 rounded-lg border-black place-content-center place-items-center  text-lg font-base">S</div>
	       	   	  	  	 <div className="w-8 h-fit border grid grid-cols-1 rounded-lg place-content-center place-items-center  text-lg font-base bg-red-500 text-white">M</div>
	       	   	  	  	 <div className="w-8 h-fit border grid grid-cols-1 rounded-lg border-black place-content-center place-items-center  text-lg font-base">L</div>
	       	   	  	  	 <div className="w-8 h-fit border grid grid-cols-1 rounded-lg border-black place-content-center place-items-center  text-lg font-base">XL</div>
	       	   	  	  </div>
       	   	  	  </div>
       	   	  </div>
       	   	  <div className="grid place-content-center place-items-between grid-cols-5 md:grid-cols-9 gap-4">
       	   	  	 <div className="border border-gray-600 rounded h-max col-span-4">
       	   	  	 	<Counter/>
       	   	  	 </div>
       	   	  	 <div className="col-span-4 auto">
       	   	  	 	<Button name="Buy Now" />
       	   	  	 </div>
       	   	  	 <div className="border h-fit border-black rounded-lg flex justify-center items-center col-span-1">
       	   	  	 	<IoMdHeartEmpty size="40" />
       	   	  	 </div>
       	   	  </div>
       	   	  <div className="grid grid-cols-1 mt-8 border border-gray-500 rounded-md">
       	   	  	 <div className="border-b-[0.007rem] border-gray-500 grid grid-cols-2 md:grid-cols-10  p-4">
       	   	  	 	 <div className="w-10 h-10 col-span-1">
       	   	  	 	 	<img className="w-full h-full object-contain" src="./images/icon-delivery2.png" alt="" />
       	   	  	 	 </div>
       	   	  	 	 <div className="col-span-9">
       	   	  	 	 	<h3 className="font-poppins font-medium">Free Delivery</h3>
       	   	  	 	 	<p className="font-poppins underline">Enter your postal code for Delivery Availability</p>
       	   	  	 	 </div>
       	   	  	 </div>

       	   	  	 <div className="border-[0.007rem] grid grid-cols-2 md:grid-cols-10 p-4">
       	   	  	 	 <div className="w-10 h-10 col-span-1">
       	   	  	 	 	<img className="w-full h-full object-contain" src="./images/Icon-return.png" alt="" />
       	   	  	 	 </div>
       	   	  	 	 <div className="col-span-9">
       	   	  	 	 	<h3 className="font-poppins font-medium">Return Delivery</h3>
       	   	  	 	 	<p className="font-poppins">Free 30 Days Delivery Returns. Details</p>
       	   	  	 	 </div>
       	   	  	 </div>
       	   	  </div>
       	   </div>	
       </div>
   	)
}

export default ProductDetails;
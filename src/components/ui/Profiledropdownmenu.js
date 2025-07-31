import Image from "./Image";
import Header from "./Header";

function Profiledropdownmenu() {
	return (
         <div className="absolute mt-4 md:mt-0 z-10 rounded-lg p-5 bg-black text-white right-4 md:right-14">
         	 <div className="grid grid-cols-4 place-items-start p-2">
         	    <Image style="w-8 h-8 col-span-1" image="./images/usericon.png" altImage="usericon" />
         	 	<Header name="Manage My Account" style="font-poppins col-span-3" />
         	 </div>
         	 <div className="grid grid-cols-4 place-items-start p-2">
         	 	<Image style="w-8 h-8 col-span-1 " image="./images/icon-mallbag.png" altImage="mallbag-icon" />
         	 	<Header name="My Order" style="font-poppins col-span-3 " />
         	 </div>
         	 <div className="grid grid-cols-4 place-items-start p-2">
         	 	<Image style="w-8 h-8 col-span-1" image="./images/icon-cancel.png" altImage="cancel-icon" />
         	 	<Header name="My Cancellations" style="font-poppins col-span-3" />
         	 </div>
         	 <div className="grid grid-cols-4 place-items-start p-2">
         	 	<Image style="w-8 h-8 col-span-1" image="./images/Icon-Reviews.png" altImage="reviews-icon" />
         	 	<Header name="My Reviews" style="font-poppins col-span-3" />
         	 </div>
         	 <div className="grid grid-cols-4 place-items-start p-2">
         	 	<Image style="w-8 h-8 col-span-1" image="./images/Icon-logout.png" altImage="logouticon" />
         	 	<Header name="Logout" style="font-poppins col-span-3" />
         	 </div>
         </div>
		)
}

export default Profiledropdownmenu;
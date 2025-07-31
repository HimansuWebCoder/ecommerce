function MyAccountSideNavMenu() {
	return (
          <div className=" col-span-1">
          	  <h2 className="font-poppins font-medium">Manage My Account</h2>
          	  <div className=" mt-2 w-full pl-5">
          	  	 <ul className="grid grid-cols-1 gap-2">
          	  	 	<li>
          	  	 		<a className="text-red-400" href="">My Profile</a>
          	  	 	</li>
          	  	 	<li>
          	  	 		<a className="text-gray-500" href="">Address Book</a>
          	  	 	</li>
          	  	 	<li>
          	  	 		<a className="text-gray-500" href="">My Payment Options</a>
          	  	 	</li>
          	  	 </ul>
          	  </div>
          	  <h2 className="font-poppins font-medium">My Orders</h2>
          	   <div className=" mt-2 w-full pl-5">
          	  	 <ul className="grid grid-cols-1 gap-2">
          	  	 	<li>
          	  	 		<a className="text-gray-500" href="">My Returns</a>
          	  	 	</li>
          	  	 	<li>
          	  	 		<a className="text-gray-500" href="">My Cancellations</a>
          	  	 	</li>
          	  	 </ul>
          	  </div>
          	  <h2 className="font-poppins font-medium">My WishList</h2>
          </div>
		)
}

export default MyAccountSideNavMenu;

import FormInput from "./FormInput";
import Button from "./Button";
function EditProfileForm() {
	return (
     <div className="w-full md:max-w-[800px] m-auto col-span-6 md:col-span-5">
     	<h2 className="font-poppins text-xl text-red-500">Edit Your Profile</h2>
     	<div className="max-w-full">
	     	<form>
	     	    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
	     	    	<FormInput name="First Name" inputCommonNameLabel="fname" placeholder="Md" />
	     	    	<FormInput name="Last Name" inputCommonNameLabel="lname" placeholder="Rimel" />
	     	    	<FormInput name="Email" inputCommonNameLabel="email" placeholder="rimel1111@gmail.com" />
	     	    	<FormInput name="Address" inputCommonNameLabel="address" placeholder="Kingston, 5236, United State" />
	     	    </ul>
	     	</form>
     	</div>
     	<h2 className="text-xl mt-4">Password Changes</h2>
     	<div className="grid grid-cols-1 w-full">
     	  
	     		<form className="max-w-full">
	     		   <div className="mt-4">
	     			  <input className=" w-full focus:outline-none h-12 bg-[#F5F5F5] p-2" placeholder="Current Passwod" type="text" />
	     		   </div>
	     		   <div className="mt-4">
	     			  <input className=" w-full focus:outline-none h-12 bg-[#F5F5F5] p-2" placeholder="New Passwod" type="text" />
	     		   </div>
	     		   <div className="mt-4">
	     			  <input className=" w-full focus:outline-none h-12 bg-[#F5F5F5] p-2" placeholder="Confirm New Passwod" type="text" />
	     		   </div>
	     		</form>
           
     		<div className="flex mt-4 justify-end">
     		   <div className=" flex gap-4">
	     			<div className=" w-fit p-2">
	     				<button className="font-poppins ">Cancel</button>
	     			</div>
	     			<div>
	     				<Button name="Save Changes" />
	     			</div>
     		   </div>
     		</div>
     	</div>	
     </div>
	)
}

export default EditProfileForm;

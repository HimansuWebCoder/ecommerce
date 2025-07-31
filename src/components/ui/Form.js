import FormInput from "./FormInput";
import CheckType from "./CheckType";
function Form() {
	return (
		 <div className="mt-4 max-w-[400px]">
		 	<form>
		 		<ul>
		 			<FormInput isRequired="true" name="First Name" inputCommonNameLabel="fname" />
		 			<FormInput isRequired="true" name="Company Name" inputCommonNameLabel="companyName" />
		 			<FormInput isRequired="true" name="Street Address" inputCommonNameLabel="address" />
		 			<FormInput name="Apartment, floor, etc. (optional)" inputCommonNameLabel="address2" />
		 			<FormInput isRequired="true" name="Town/City" inputCommonNameLabel="city" />
		 			<FormInput isRequired="true" name="Phone Number" inputCommonNameLabel="phone" />
		 			<FormInput isRequired="true" name="Email Address" inputCommonNameLabel="email" />
		 		</ul>
		 	</form>
		 	<div className="flex mt-4 gap-1">
          	  	 <CheckType width="5" height="5" bgColor="[#DB4444]" size="auto"  checktypename="checkbox" />
          	  	 <p className="text-sm font-poppins">Save this information for faster check-out next time</p>
          	  </div>
		 </div>
		)
}

export default Form;

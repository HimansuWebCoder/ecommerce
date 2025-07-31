import { Link } from "react-router";
import Header from "../ui/Header";
import Subheader from "../ui/Subheader";
import Input from "../ui/Input";
import ButtonComp from "../ui/ButtonComp";
import Image from "../ui/Image";

function LoginForm({style}) {
	return (
          <div className={`${style} mt-5 md:mt-0 flex justify-center items-center`}>
            <div className="gap-4 grid">
             <Header name="Log in to Exclusive" style="text-4xl font-medium font-inter" />
             <Subheader style="font-poppins text-lg" name="Enter your details below" />
          	 <form className="w-full">
          	 	 <Input inputType="text" inputStyle="font-poppins focus:outline-none mt-4 w-full border-b-2 border-gray-500 p-4 text-lg" placeholder="Email or Phone Number" inputContainerStyle="" />
          	 	 <Input inputType="text" inputStyle="font-poppins focus:outline-none mt-4 w-full border-b-2 border-gray-500 p-4 text-lg" placeholder="Password" inputContainerStyle="" />
          	 </form>
          	 <div className="grid grid-cols-2 place-content-center place-items-center rounded-lg">
          	    <ButtonComp buttonStyle="font-poppins text-white bg-[#DB4444] w-full h-full p-4 text-md rounded-lg" buttonContainerStyle="w-full h-fit" linkname="Log In" />
          	    <ButtonComp buttonStyle="w-full h-full object-contain font-poppins p-4 text-md " buttonContainerStyle="" linkname="Forget Password?" />
          	 </div>
          	 </div>
          </div>
		)
}

export default LoginForm;


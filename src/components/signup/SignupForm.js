import { Link } from "react-router";
import Header from "../ui/Header";
import Subheader from "../ui/Subheader";
import Input from "../ui/Input";
import ButtonComp from "../ui/ButtonComp";
import Image from "../ui/Image";

function SignupForm({style}) {
	return (
          <div className={`${style} mt-5 md:mt-0 flex justify-center items-center`}>
            <div className="gap-4 grid">
             <Header name="Create an account" style="text-4xl font-medium font-inter" />
             <Subheader style="font-poppins text-lg" name="Enter your details below" />
          	 <form className="w-full">
          	 	 <Input inputType="text" inputStyle="font-poppins focus:outline-none mt-4 w-full border-b-2 border-gray-500 p-4 text-lg" placeholder="Name" inputContainerStyle="" />
          	 	 <Input inputType="text" inputStyle="font-poppins focus:outline-none mt-4 w-full border-b-2 border-gray-500 p-4 text-lg" placeholder="Email or Phone Number" inputContainerStyle="" />
          	 	 <Input inputType="text" inputStyle="font-poppins focus:outline-none mt-4 w-full border-b-2 border-gray-500 p-4 text-lg" placeholder="Password" inputContainerStyle="" />
          	 </form>
          	 <ButtonComp buttonStyle="font-poppins text-white bg-[#DB4444] w-full h-full p-4 text-lg rounded-lg" buttonContainerStyle="w-full h-fit" linkname="Create Account" />
          	 <div className="border flex gap-2 justify-center items-center border border-gray-600 rounded-lg">
          	 	<Image image="./images/google-icon.png" altImage="google-icon" style="w-8 h-8" />
          	    <ButtonComp buttonStyle="w-full h-full object-contain font-poppins p-4 text-lg " buttonContainerStyle="" linkname="Sign up with Google" />
          	 </div>
          	 <div className=" flex justify-center gap-5">
               <Subheader style="font-poppins text-lg" name="Already have account?" />
               <div className="">
               	   <Link className="underline font-poppins text-lg" to="/login">Log in</Link>
               </div>
          	 </div>
          	 </div>
          </div>
		)
}

export default SignupForm;


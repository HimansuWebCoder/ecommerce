import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Button from "../ui/Button";
import Image from "../ui/Image";
import LoginForm from "./LoginForm";

function Login() {
	return(
		<div>
		     <Header/>
          	 <Navbar/>
          	 <div className="grid grid-cols-1 m-4 md:grid-cols-10 md:mr-14 md:ml-0 mb-14">
          	 	 <Image image="./images/Side-Image.png" altImage="" style="col-span-6" />
          	     <LoginForm style="col-span-4 flex flex-col"/>
          	 </div>
             <Footer/>
        </div>
		) 
}

export default Login;

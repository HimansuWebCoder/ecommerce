import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Button from "../ui/Button";
import ErrorRouteLinks from "./ErrorRouteLinks";

function ErrorPage() {
	return(
		<div>
		     <Header/>
          	 <Navbar/>
            <ErrorRouteLinks />
          <div className="grid grid-cols-1 gap-14 m-14">
          	 <div className="w-full grid gap-5 text-center">
          	 	 <h1 className="font-bold font-inter tracking-widest text-7xl">404 Not Found</h1>
          	 	 <p className="font-poppins text-sm">Your visited page not found. You may go home page.</p>
          	 </div>
          	 <div className="w-full grid grid-cols-1 place-content-center place-items-center">
	          	   <div className="w-fit h-fit">
	          	 	<Button name="Back to home page" />
	          	   </div>
          	 </div>
          </div>
          <Footer/>
        </div>
		) 
}

export default ErrorPage;

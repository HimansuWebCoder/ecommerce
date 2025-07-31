import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactRouteLinks from "./ContactRouteLinks";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
function AboutPage() {
	return (
          <div>
          	 <Header/>
          	 <Navbar/>
          	 <ContactRouteLinks />
          	 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 m-4 md:m-14">
	          	 <ContactInfo/>
	          	 <ContactForm/>
          	 </div>
          	<Footer/>
          </div>
		)
}

export default AboutPage;

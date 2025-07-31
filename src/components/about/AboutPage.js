import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Support from "../ui/Support";
import ProfileImageCard from "./ProfileImageCard";
import Card from "./Card";
import AboutRouteLinks from "./AboutRouteLinks";
import AboutHeroSection from "./AboutHeroSection";
import PaginationCircle from "./PaginationCircle";
function AboutPage() {
	return (
          <div>
          	 <Header/>
          	 <Navbar/>
          	 <AboutRouteLinks/>
          	 <AboutHeroSection/>
          	 <Card/>
          	 <ProfileImageCard />
          	 <PaginationCircle/>
          	 <Support/>
          	<Footer/>
          </div>
		)
}

export default AboutPage;

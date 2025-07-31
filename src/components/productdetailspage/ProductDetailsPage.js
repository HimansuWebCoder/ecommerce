import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProductDetailsRouteLinks from "../ui/ProductDetailsRouteLinks";
import ProductDetails from "../ui/ProductDetails";
import ProductDetailsProductLists from "../ui/ProductDetailsProductLists";
function ProductDetailsPage() {
	return (
          <div>
          	<Header/>
          	<Navbar/>
          	<ProductDetailsRouteLinks/>
          	<ProductDetails/>
          	<ProductDetailsProductLists/>
          	<Footer/>
          </div>
		)
}

export default ProductDetailsPage;

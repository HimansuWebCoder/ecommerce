import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import ImageSlider from './components/ImageSlider';
import HomeSalesProductLists from "./components/HomeSalesProductLists";
import ProductViewsBtn from "./components/ui/Product-view";
import HorizontalBar from "./components/ui/HorizontalBar";
import ProductCategoryContainer from "./components/ProductCategoryContainer";
import BestSellingProducts from "./components/ui/BestSellingProducts";
import CategoryAdProduct from "./components/ui/CategoryAds";
import ProductExplore from "./components/ui/ExploringProducts";
import NewProducts from "./components/ui/NewProductsArrival";
import Support from "./components/ui/Support";
import Footer from "./components/Footer";
import TopScroll from "./components/TopScroll";
import Search from "./components/ui/Search";
import SideMenuItems from "./components/ui/SideMenuItems";
import ButtonComp from "./components/ui/ButtonComp";
const images = [
  { url: './images/image-slider.png' },
  { url: './images/image-slider.png' },
  { url: './images/image-slider.png' }
];

function App() {
  return (
   <div className="w-full h-auto">
     <Header />
     <Navbar />
     <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 m-4 md:m-14">
         <SideNav/>
         <ImageSlider images={images} />
     </div>
     <HomeSalesProductLists/>
     <ButtonComp linkname="View All Products" route="productdetails" buttonStyle="bg-[#db4444] max-w-fit md:max-w-fit h-auto p-3 rounded text-white mt-4" buttonContainerStyle="w-full h-auto text-center" />
     <HorizontalBar/>
     <ProductCategoryContainer />
     <HorizontalBar/>
     <BestSellingProducts/>
     <CategoryAdProduct/>
     <ProductExplore/>
     <ButtonComp linkname="View All Products" route="productdetails" buttonStyle="bg-[#db4444] max-w-fit md:max-w-fit h-auto p-3 rounded text-white mt-4" buttonContainerStyle="w-full h-auto text-center" />
     <NewProducts/>
     <Support/>
     <TopScroll />
     <Footer />
   </div>  
  );
}

export default App;

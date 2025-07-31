import HomeSalesProducts from "../ui/HomeSalesProducts";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Heading from "../ui/Header";
import Subheader from "../ui/Subheader";
import SubHeader from "../ui/SubHeader";
import HomeHeader from "../ui/HomeHeader";
import ProductViewsBtn from "../ui/Product-view";
import ButtonComp from "../ui/ButtonComp";

const ourProducts = [
    {
        itemName: "Gucci duffle bag",
        price: "$960",
        discount: 15,
        discountedPrice: "$160",
        originalPrice: "$1160",
        image: "./images/bag.png",
        rating: "",
        isNew: false,
        isShow: true,
        isCartShow: true, 
        isShowStar: false,
        isShowEyeIcon: false,
        isShowHeartIcon: false,
        isCartIconShow: true,
        isShowDeleteIcon: true,
    },
    {
        itemName: "RGB liquid CPU Cooler",
        price: "$1960",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/rgbfan.png",
        rating: "",
        isNew: false,
        isShow: true,
        isCartShow: true,
        isShowEyeIcon: false,
        isShowStar: false,
        isShowHeartIcon: false,
        isCartIconShow: true,
        isShowDeleteIcon: true,
    },
    {
        itemName: "GP11 Shooter USB Gamepad",
        price: "$550",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/usbgamepad.png",
        rating: "",
        isNew: false,
        isShow: true,
        isCartShow: true,
        isShowEyeIcon: false,
        isShowStar: false,
        isShowHeartIcon: false,
        isCartIconShow: true,
        isShowDeleteIcon: true,
    },
     {
        itemName: "Quilted Satin Jacket",
        price: "$750",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/jacket.png",
        rating: "",
        isNew: false,
        isShow: true,
        isCartShow: true,
        isShowEyeIcon: false,
        isShowStar: false,
        isShowHeartIcon: false,
        isCartIconShow: true,
        isShowDeleteIcon: true,
    },
]

const ourProducts2 = [
         {
        itemName: "ASUS FHD Gaming Laptop",
        price: "$960",
        discount: 15,
        discountedPrice: "$160",
        originalPrice: "$1160",
        image: "./images/laptop.png",
        rating: "",
        isNew: false,
        isShow: true,
        isCartShow: true,
        isShowColor: false,
        isShowEyeIcon: true,
        isShowStar: true,
        isShowHeartIcon: false,
        isCartIconShow: true,
        isShowDeleteIcon: false,
    },
    {
        itemName: "IPS LCD Gaming Monitor",
        price: "$1160",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/gaming-monitor.png",
        rating: "",
        isNew: false,
        isShow: true,
        isCartShow: true,
        isShowColor: false,
        isShowEyeIcon: true,
        isShowStar: true,
        isShowHeartIcon: false,
        isCartIconShow: true,
        isShowDeleteIcon: false,
    },
    {
        itemName: "HAVIT HV-G92 Gamepad",
        price: "$560",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/gamepad.png",
        rating: "",
        isNew: true,
        isShow: true,
        isCartShow: true,
        isShowColor: false,
        isShowEyeIcon: true,
        isShowStar: true,
        isShowHeartIcon: false,
        isCartIconShow: true,
        isShowDeleteIcon: false,
    },
    {
        itemName: "AK-900 Wired Keyboard",
        price: "$200",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/keyboard.png",
        rating: "",
        isNew: false,
        isShow: true,
        isCartShow: true,
        isShowColor: false,
        isShowEyeIcon: true,
        isShowStar: true,
        isShowHeartIcon: false,
        isCartIconShow: true,
        isShowDeleteIcon: false,
    },
]

function Wishlist({style}) {
	return (
          <div className="">
              <Header/>
              <Navbar/>
            {/*1st products lists*/}
            <div className="m-4 md:m-14">
                  <div className="flex justify-between items-center">
                      <Heading style="font-poppins" name="Wishlist (4)" />
                      <ButtonComp linkname="Move All To Bag" buttonStyle="w-40 h-fit border border-gray-500 p-2 rounded font-poppins" buttonContainerStyle="" />
                  </div>
                  <div className="w-full grid grid-cols-2 place-item-center gap-2 sm:grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4 content-center ">
                {ourProducts.map(product => (
                    <div className="h-fill">
                        <HomeSalesProducts 
                        itemName={product.itemName}
                        itemPrice={product.price}
                        itemImg={product.image}
                        discount={product.discount}
                        discountedPrice={product.discountedPrice}
                        isShow={product.isShow}
                        isNew={product.isNew}
                        isCartShow={product.isCartShow}
                        isShowColor={product.isShowColor}
                        isShowStar={product.isShowStar}
                        isShowEyeIcon={product.isShowEyeIcon}
                        isShowHeartIcon={product.isShowHeartIcon}
                        isCartIconShow={product.isCartIconShow}
                        isShowDeleteIcon={product.isShowDeleteIcon}
                        originalPrice={product.originalPrice}
                    />
                    </div>
                ))}
            </div>
         </div>

         {/*2nd products lists*/}
          <div className="m-4 md:m-14">
                  {/*<div className="flex justify-between items-center border">*/}
                  <div className="flex justify-between items-center">
                   <SubHeader name="Just For You"/>
                   <ButtonComp linkname="See All" buttonStyle="w-40 h-fit border border-gray-500 p-2 rounded font-poppins" buttonContainerStyle="" />
                  </div>
                  <div className="w-full grid grid-cols-2 place-item-center gap-2 sm:grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4 content-center ">
                {ourProducts2.map(product => (
                    <div className="h-fill">
                        <HomeSalesProducts 
                        itemName={product.itemName}
                        itemPrice={product.price}
                        itemImg={product.image}
                        discount={product.discount}
                        discountedPrice={product.discountedPrice}
                        isShow={product.isShow}
                        isNew={product.isNew}
                        isCartShow={product.isCartShow}
                        isShowColor={product.isShowColor}
                        isShowStar={product.isShowStar}
                        isShowEyeIcon={product.isShowEyeIcon}
                        isShowHeartIcon={product.isShowHeartIcon}
                        isCartIconShow={product.isCartIconShow}
                        isShowDeleteIcon={product.isShowDeleteIcon}
                        originalPrice={product.originalPrice}
                    />
                    </div>
                ))}
            </div>
         </div>
              <Footer/>
          </div>
		)
}

export default Wishlist;


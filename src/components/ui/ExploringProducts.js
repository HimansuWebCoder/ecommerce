import HomeSalesProducts from "./HomeSalesProducts";
import HomeHeader from "./HomeHeader";
import SubHeader from "./SubHeader";
import Pagination from "./Pagination";
import AddToCart from "./AddToCart";
import IsHover from "./IsHover";

const ourProducts = [
    {
        itemName: "Breed Dry Dog Food",
        price: "$100",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/dogfood.png",
        rating: "",
        isNew: false,
        isShow: false,
        isCartShow: false, 
    },
    {
        itemName: "CANON EOS DSLR Camera",
        price: "$360",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/dslrcamera.png",
        rating: "",
        isNew: false,
        isShow: false,
        isCartShow: true,
    },
    {
        itemName: "ASUS FHD Gaming Laptop",
        price: "$700",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/laptop.png",
        rating: "",
        isNew: false,
        isShow: false,
        isCartShow: false,
    },
     {
        itemName: "Curology Product Set ",
        price: "$500",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/curology-product.png",
        rating: "",
        isNew: false,
        isShow: false,
        isCartShow: false,
    },
     {
        itemName: "Kids Electric Car",
        price: "$960",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/electric-car.png",
        rating: "",
        isNew: true,
        isShow: false,
        isCartShow: false,
        isShowColor: true,
    },
    {
        itemName: "Jr. Zoom Soccer Cleats",
        price: "$1160",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/soccer.png",
        rating: "",
        isNew: false,
        isShow: false,
        isCartShow: false,
        isShowColor: true,
    },
    {
        itemName: "GP11 Shooter USB Gamepad",
        price: "$660",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/usbgamepad.png",
        rating: "",
        isNew: true,
        isShow: false,
        isCartShow: false,
        isShowColor: true,
    },
    {
        itemName: "Quilted Satin Jacket",
        price: "$660",
        discount: 15,
        discountedPrice: "$160",
        image: "./images/jacket.png",
        rating: "",
        isNew: false,
        isShow: false,
        isCartShow: false,
        isShowColor: true,
    },
]
function ProductExplore() {
    return (
      <div className="max-w-full flex justify-center flex-col items-center m-4 lg:m-14 md:m-10 sm:m-8 ">
            <div className="w-full  h-auto flex flex-col  ">
               {/* <Timer/> */}
               <div className="w-full">
                  <SubHeader name="Our Products" />
               </div>
               <div className="w-full grid grid-cols-2 place-item-end place-content-end">
                  <div className="grid grid-cols-1">
                     <HomeHeader name="Explore Our Products" />
                  </div>
                  <div className="w-full grid grid-cols-1 place-content-end place-items-end">
                    <Pagination />
                  </div>
               </div>
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
                    />
                    </div>
                ))}
            </div>
            <div className="border border-black w-full h-5">
            <IsHover Component={<SubHeader name="hover"/>} />
            </div>
      </div>
    )
}

export default ProductExplore;

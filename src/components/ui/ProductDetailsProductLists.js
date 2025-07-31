import HomeSalesProducts from "./HomeSalesProducts";
import HomeHeader from "./HomeHeader";
import SubHeader from "./SubHeader";
import Pagination from "./Pagination";
const productLists = [
    {
        itemName: "HAVIT HV-G92 Gamepad",
        price: "$120",
        discount: 40,
        originalPrice: 160,
        image: "./images/gamepad.png",
        rating: 5,
        isLike: "",
        isShow: "",
    },
    {
        itemName: "AK-900 Wired Keyboard",
        price: "$960",
        discount: 35,
        originalPrice: 1160,
        image: "./images/keyboard.png",
        rating: 5,
        isLike: "",
        isShow: "",
        isCartShow: true,
    },
    {
        itemName: "IPS LCD Gaming Monitor",
        price: "$370",
        discount: 30,
        originalPrice: 400,
        image: "./images/gaming-monitor.png",
        rating: 4,
        isLike: "",
        isShow: "",
    },
     {
        itemName: "S-Series Comfort Chair ",
        price: "$375",
        discount: 25,
        originalPrice: 400,
        image: "./images/rgbfan.png",
        rating: 5,
        isLike: "",
        isShow: "",
    },
]
function ProductDetailsProductLists() {
  return (
      <div className="max-w-full h-auto m-4 lg:m-14 md:m-10 sm:m-8 mt-10">
            <div className="w-full h-auto flex flex-col">
               <div className="w-full ">
                  <SubHeader name="Related Item" />
               </div>
            </div>
            <div className="grid grid-cols-2 place-content-center place-items-center gap-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2">
               {productLists.map(item => (
                <div className="">
                    <HomeSalesProducts 
                        itemName={item.itemName}
                        itemPrice={item.price}
                        itemImg={item.image}
                        discount={item.discount}
                        originalPrice={item.originalPrice}
                        rating={item.rating}
                        isCartShow={item.isCartShow}
                    />
                </div>
               ))}
            </div>
        </div>
  	)
}

export default ProductDetailsProductLists;
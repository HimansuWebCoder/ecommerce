import HomeSalesProducts from "./ui/HomeSalesProducts";
import Timer from "./ui/Timer";
import HomeHeader from "./ui/HomeHeader";
import SubHeader from "./ui/SubHeader";
import Pagination from "./ui/Pagination";
import HeaderSubheaderPaginationContainer from "./ui/HeaderSubheaderPaginationContainer"
import Rating from "./ui/Rating";
import productLists from "./data/homesalesdata.json";

function HomeSalesProductLists() {
    return (
        <div className="max-w-full h-auto m-4 lg:m-14 md:m-10 sm:m-8 mt-10">
            <div className="w-full h-auto flex flex-col">
               <div className="w-full ">
                  <SubHeader name="Today's" />
               </div>
               <div className="w-full h-auto flex md:flex-row flex-col justify-between">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-auto flex items-start md:items-end justify-between">
                     <HomeHeader name="Flash Sales" />
                     {/*<Timer/> */}
                  </div>
                  <div className="w-full grid grid-cols-1 place-content-end place-items-end">
                    <Pagination />
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
               {productLists.map(item => (
                <div className="">
                    <HomeSalesProducts 
                        itemName={item.itemName}
                        itemPrice={item.price}
                        itemImg={item.image}
                        discount={item.discount}
                        originalPrice={item.originalPrice}
                        rating={item.rating}
                    />
                </div>
               ))}
            </div>
        </div>
    )
}

export default HomeSalesProductLists;

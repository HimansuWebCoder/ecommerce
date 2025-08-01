import HomeSalesProducts from "./HomeSalesProducts";
import HomeHeader from "./HomeHeader";
import SubHeader from "./SubHeader";
import Pagination from "./Pagination";
import ProductViewsBtn from "./Product-view";
import bestSellingProductLists from "../data/bestsellingproducts.json";

function BestSellingProducts() {
  return (
    <div className="max-w-full m-4 lg:m-14 md:m-10 sm:m-8">
           <div className="w-full flex justify-between">
           <div className="">
                <SubHeader name="This Month"/>
                <HomeHeader name="Best Selling Products"/>
           </div>
           <div className="grd grid-cols-1 place-content-center place-items-center">
                <ProductViewsBtn name="View All"/>
           </div>
            </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
               {bestSellingProductLists.map(item => (
                <div className="">
                    <HomeSalesProducts 
                        itemName={item.itemName}
                        itemPrice={item.price}
                        itemImg={item.image}
                        discount={item.discount}
                        originalPrice={item.originalPrice}
                        isNew={item.isNew}
                        isShow={item.isShow} 
                    />
                </div>
               ))}
            </div>
    </div>
  )
}

export default BestSellingProducts;
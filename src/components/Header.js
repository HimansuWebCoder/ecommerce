import ToggleMenu from "./ui/ToggleMenu";
import Search from "./ui/Search";
import IsToggleMenuItems from "./ui/IsToggleMenuItems";
import CartIconBtn from "./ui/CartIconBtn";
import WishListIconBtn from "./ui/WishListIconBtn";
import RouteBasedLogic from "./ui/RouteBasedLogic";
import MyAccountProfile from "./ui/MyAccountProfile";
import IsRoute from "./IsRoute";
import { Link } from "react-router";

function HeaderComp() {
    return (
        <div className='max-w-full md:w-full flex-col md:flex-row sm:w-full h-auto bg-black flex items-between justify-around p-4'>
            <div className="w-[400px] h-auto"></div>
          {/* Header Content Start*/}
                <div className="flex  flex-col md:flex-row max-w-[935px] md:w-[935px] justify-between">
                    <div className="flex max-w-full flex-col md:flex-row">
                        <p className="text-white text-xl md:text-base font-poppins">Summer Sale For All Swim And Free Express Delivery - OFF 50%!</p>
                        {/*<a className="text-white font-bold text font-poppins underline md:text-base text-xl md:ml-2 ml-0" href="#shop">ShopNow</a>*/}
                        <Link className="text-white font-bold text font-poppins underline md:text-base text-xl md:ml-2 ml-0" to="/">ShopNow</Link>
                    </div>
                    <div className="md:mr-9 mr-0 flex justify-end">
                        <select className="bg-black text-white">
                           <option className="font-poppins" value="english">English</option>
                        </select>
                    </div>
                    {/*<ToggleMenu/>*/}
                </div>
          {/* Header Content End*/}
          {/*Sidebar items toggle menu start*/}
            <IsToggleMenuItems/>
          {/*Sidebar items toggle menu End*/}

          {/*Mobile View Toggleing mode Start*/}
            <div className="grid grid-cols-1 mb-2 md:hidden place-content-end place-items-end ">
            {IsRoute({route: ["/account", "/cart", "/wishlist", "/contact", "/about", "/checkout", "/productdetails"]}) ? (
                  <div className="w-fit h-fit grid grid-cols-3 gap-2">
                    <WishListIconBtn/>
                    <CartIconBtn/>
                    <MyAccountProfile />
                  </div>
                ) : (
                  // <div className="w-fit h-fit grid grid-cols-2 gap-2">
                  <div className="w-full h-fit flex justify-end items-center">
                   <div className="flex md:basis-2/6 gap-1 justify-between">
                     {IsRoute ({route: ["/signup", "/login"]}) ? (
                        <>
                        </>
                        ) : (
                        <>
                          <WishListIconBtn/>
                        <CartIconBtn/>
                        </>
                        )}
                    </div>
                  </div>
                )}
            </div>
          {/*Mobile View Toggleing mode End*/}
            <div className="blocklg:hidden md:hidden">
              <Search/>
            </div>
        </div>
    )
}

export default HeaderComp;

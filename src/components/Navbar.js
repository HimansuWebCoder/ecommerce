import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import Search  from "./ui/Search";
import WishListIconBtn  from "./ui/WishListIconBtn";
import CartIconBtn  from "./ui/CartIconBtn";
import NavMenu from "./ui/NavMenu";
import MyAccountProfile from "./ui/MyAccountProfile";
import { Route } from "react-router";
import RouteBasedLogic from "./ui/RouteBasedLogic"
import IsRoute from "./IsRoute";
function NavBarComp() {
    return (
        <div className="max-w-full h-auto mt-6 hidden lg:flex items-center justify-center m-14 border-b-2 pb-2">
       <div className="w-full h-auto flex items-center ">
        {/* Intro Exclusive */}
         <div className="w-[300px] h-auto text-left">
            <h1 className="text-3xl font-bold font-inter">Exclusive</h1>
         </div>
         {/* navmenu links */}
         <NavMenu />
       </div>
       {/*<div className='grid grid-cols-4 w-full border place-content-center place-items-center'>*/}
       <div className='grid grid-cols-7 w-full place-content-center'>
       {/* Search Component Start*/}
            <Search />
           {IsRoute({route: ["/account", "/about", "/contact", "/productdetails", "/error", "/cart", "/wishlist", "/checkout"]}) ? (
                      // <div className="grid md:gap-4 col-span-1 grid-cols-3 border place-content-center place-items-center">
                      <div className="grid col-span-2 grid-cols-3 place-content-center place-items-end">
               {/* Wishlist Icon*/}
                      <WishListIconBtn/>
               {/* Cart Icon Button*/}
                      <CartIconBtn/>
                      <MyAccountProfile />
                    </div>
            ) : (
                   // <div className="grid col-span-1 grid-cols-2 border place-content-center place-items-center">
                   <div className="grid grid-cols-1 col-span-2 ">
           {/* Wishlist Icon*/}
                  {/*<WishListIconBtn/>*/}
           {/* Cart Icon Button*/}
                    {/*<CartIconBtn/>*/}
                  {
                     IsRoute({route: ["/signup", "/login"]}) ? (
                              null
                            ) : (
                            <div className="grid grid-cols-1 place-content-center place-items-end">
                              <div className="grid grid-cols-2 gap-5">
                               <WishListIconBtn/>
                               <CartIconBtn/>
                              </div>
                            </div>
                            )
                  }
                </div>
            )}
       </div>
     </div>
    )
}

export default NavBarComp;
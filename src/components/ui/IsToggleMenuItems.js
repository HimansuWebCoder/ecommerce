import { useState } from "react";
import SideNav from "../SideNav";
import SideMenuItems from "./SideMenuItems";
import NavMenu from "./NavMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function IsToggleMenuItems() {
	const [ isShowMenu, setIsShowMenu ] = useState(false);
 
    function toggleMenuHandler() {
    	setIsShowMenu(!isShowMenu)
    }

	return (
		<div>
          <button className="text-white md:hidden" onClick={toggleMenuHandler}>
          	 {/*click*/}
              {isShowMenu ? (<IoMdClose size="30"/>) : (<RxHamburgerMenu size="30"/>)}
          </button>

            {isShowMenu ? (
              <div className="grid grid-cols-1">
                  <NavMenu/>
                  <div className="p-4">
                    <h1 className="text-white text-2xl text-blue-400">Categories</h1>
                  </div>
                  <SideMenuItems/>
              </div> 

              ) : null}
		</div>
		)
}

export default IsToggleMenuItems;

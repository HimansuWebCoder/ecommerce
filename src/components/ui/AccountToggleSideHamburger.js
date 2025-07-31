import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import MyAccountSideNavMenu from "./MyAccountSideNavMenu";
import { useState } from "react";

function AccountToggleSideHamburger() {
	const [ isShowMenu, setIsShowMenu ] = useState(false);
 
    let menuItems;

    function toggleMenuHandler() {
    	setIsShowMenu(!isShowMenu)
    }

	return (
		<div className="relative flex justify-left md:hidden">
           <button className="md:hidden" onClick={toggleMenuHandler}>
          	 {/*click*/}
              {isShowMenu ? (<IoMdClose size="30"/>) : (<RxHamburgerMenu size="30"/>)}
          </button>

            {isShowMenu && (
              <div className="grid grid-cols-1 absolute left-0 top-8 p-4 mt-2 bg-white border border rounded shadow-lg w-56">
                  <MyAccountSideNavMenu/>
              </div>
              )}
          </div>
		)
}

export default AccountToggleSideHamburger;

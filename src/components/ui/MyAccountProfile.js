import { Link } from "react-router"; 
import { useState } from "react";
import Profiledropdownmenu from "./Profiledropdownmenu";

function MyAccountProfile() {
    const [ isToggle, setIsToggle ] = useState(false);

    const mouseHoverHandler = () => setIsToggle(true);
    const mouseLeaveHandler = () => setIsToggle(false);

    function toggleHandler() {
        setIsToggle(!isToggle);
    }

    // function toggleHandler2() {
    //     SetIsShowAccountDisplay(isShowAccountDisplay == "none" ? "block" : "none");
    // }

	return (
          <div className="bg-white rounded-full hover:bg-red-400 block" onMouseEnter={mouseHoverHandler} onMouseLeave={mouseLeaveHandler}>
          
          <Link to="/account">
          	 <img className="w-fit h-fit" src="./images/user.png" alt="my account profile" />
         </Link>
                  {isToggle && <Profiledropdownmenu/>}
          </div>
		)
}

export default MyAccountProfile;
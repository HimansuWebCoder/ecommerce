import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router";
import Notification from "./Notification";
import IsRoute from "../IsRoute";
function WishListIconBtn() {
	return (
         <div className="rounded-lg h-fit relative flex justify-center items-center bg-white">
         <Link to="/wishlist">
           <IoMdHeartEmpty size="30"/>
           {IsRoute({route: ["/wishlist", "/cart", "/checkout"]}) ? (
               <Notification  isShowNotification={true} style="w-3 h-3 text-xs bg-red-400 rounded-full text-white flex justify-center z-40 items-center absolute top-0 right-0" number="4" />
            ) : null}
         </Link>
         </div>
		)
}

export default WishListIconBtn;
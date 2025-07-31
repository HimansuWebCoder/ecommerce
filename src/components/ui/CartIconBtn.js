import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router";
import Notification from "./Notification";
import IsRoute from "../IsRoute";
function CartIconBtn() {
	return (
         <div className="rounded-lg relative w-fit h-fit  flex justify-center items-center bg-white">
           <Link to="/cart">
              <IoCartOutline size="30" />
           </Link>
           {IsRoute({route: ["/checkout", "/cart"]}) ? (
               <Notification  isShowNotification={true} style="w-3 h-3 text-xs bg-red-400 rounded-full text-white flex justify-center z-40 items-center absolute top-0 right-0" number="2" />
            ) : null}
         </div>
		)
}

export default CartIconBtn;
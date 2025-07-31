import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router";
function HeartIcon({isShowHeartIcon}) {
    return (
       <div className="absolute top-3 right-2">
       { isShowHeartIcon ? (
          <Link to="/wishlist">
          <div className="p-1 bg-white rounded-full">
             <IoMdHeartEmpty size="20" />
          </div>
          </Link>
          ) : null
       }
       </div>
    )
}

export default HeartIcon;

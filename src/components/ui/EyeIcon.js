import { HiOutlineEye } from "react-icons/hi2";
import IsRoute from "../IsRoute";

function EyeIcon({isShowEyeIcon}) {
    return (
      <>
      {
        IsRoute({route: ["/wishlist"]}) ? (
      <div className="absolute top-3 right-2">
        {isShowEyeIcon ? (
          <div className="p-1 bg-white rounded-full">
            <HiOutlineEye size="20" />
          </div>
          ) : null
        }
      </div>

          ) : (
             <div className="absolute top-12 right-2">
        {isShowEyeIcon ? (
          <div className="p-1 bg-white rounded-full">
            <HiOutlineEye size="20" />
          </div>
          ) : null
        }
      </div>
          )
      }
      </>
    )
}

export default EyeIcon;

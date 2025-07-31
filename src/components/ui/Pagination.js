import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function Pagination() {
    return (
        <div className="grid max-w-fit grid-cols-2 gap-2 place-content-end place-items-end mt-4">
            <div className="w-fit h-fit bg-[#f5f5f5] rounded-full">
                <IoIosArrowRoundBack size="30" />
            </div>
            <div className="w-fit h-fit bg-[#f5f5f5] rounded-full">
                <IoIosArrowRoundForward size="30" />   
            </div>
        </div>
    )
}

export default Pagination;

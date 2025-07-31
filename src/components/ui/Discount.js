import { useState } from "react";
function Discount({price, isShow}) {
    return (
        <div className="absolute top-2 left-2">
            {isShow ? (
                 <button className="w-10 h-auto md:h-8 md:w-14 md:text-sm text-xs  p-1 text-white bg-[#db4444] font-poppins rounded">{price}</button>
            ): null}
        </div>
    )
} 

export default Discount;

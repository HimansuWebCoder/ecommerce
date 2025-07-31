import { useState } from "react";
function IsProductNew({isNew}) {
    return (
        <div className="absolute left-2 top-2 text-center">
            {isNew ? (
                 <button className="md:w-14 w-10 h-6 md:h-8 text-xs md:text-sm p-1 text-white bg-[#00ff66] rounded">New</button>
            ): null}
        </div>
    )
} 

export default IsProductNew;

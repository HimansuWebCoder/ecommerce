import { useState } from "react";
import { LuMinus } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
function Counter() {
	const [ count, setCount ] = useState(0);

	function counterIncrementHandler() {
       setCount(count + 1);
	}


	function counterDecreamentHandler() {
       setCount(count - 1);
	}

	return (
          <div className="h-max place-content-center rounded grid grid-cols-3">
             <button className="flex border-gray-600 border-r-2 border-y-full justify-center items-center h-10" onClick={counterDecreamentHandler}>
          	   <LuMinus/>
             </button>
          	  <div className="flex rounded justify-center self-center text-center items-center h-max text-xl font-bold">
          	  	 <p className="text-center">{count}</p>
          	  </div>
          	  <button className="flex bg-[#db4444]  justify-center items-center border-l-2 h-full" onClick={counterIncrementHandler}>
          	    <FaPlus/>
          	  </button>
          </div>
		)
}

export default Counter;

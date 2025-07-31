import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function ProductCounter() {
	const [ count, setCount ] = useState(0);

	function counterIncrementHandler() {
       setCount(count + 1);
	}


	function counterDecreamentHandler() {
       setCount(count - 1);
	}

	return (
		 <div className="grid grid-cols-2 w-16 p-2 rounded-lg border place-content-center place-items-center">
		 	 {/*<div>0{count}</div>*/}
		 	 {count < 10 && count > 0 ? (
                   <div>0{count}</div>
		 	 	) : (
                   <div>{count}</div>
		 	 	)}
		 	 <div className="grid grid-cols-1">
		 	 	 <IoIosArrowUp onClick={counterIncrementHandler}/>
		 	 	 <IoIosArrowDown onClick={counterDecreamentHandler}/>
		 	 </div>
		 </div>
		)
}

export default ProductCounter;

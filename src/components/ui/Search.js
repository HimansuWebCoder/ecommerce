import { LuSearch } from "react-icons/lu";
import IsRoute from "../IsRoute";

function Search() {
	return (
		// <div className="grid col-span-3 max-w-[400px] mt-2 md:w-[300px] grid-cols-4 place-content-center place-items-end p-2 rounded bg-gray-100">
		<div className="grid col-span-5 grid-cols-6  p-2 rounded bg-gray-100">
             <input className="col-span-5 h-full  font-poppins focus:outline-none bg-gray-100 placeholder-gray-500" type='text' placeholder='What are you looking for?'/>
	          <div className="grid grid-cols-1  col-span-1 place-content-center">
	            <LuSearch size="30"/>
	          </div>
         </div>
		)
}

export default Search;

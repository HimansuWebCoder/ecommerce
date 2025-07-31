import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function SideMenuItems() {
	return (
         <div className="p-4">
         	<ul className="w-full grid text-xl grid-cols-1 gap-2 place-content-start text-white">
                <li className=" flex justify-between hover:underline w-full">
                    <a href="#womansfashion">Woman's Fashion</a>
                     <MdOutlineKeyboardArrowRight className="mr-2" size="30"/>
                </li>
                <li className="flex justify-between hover:underline  w-full">
                    <a href="#mensfashion">Men's Fashion</a>
                    <MdOutlineKeyboardArrowRight className="mr-2" size="30"/>
                </li>
                <li className="hover:underline">
                    <a href="#electronics">Electronics</a>
                </li>
                <li className="hover:underline">
                    <a href="#home&lifestyle">Home & Lifestyle</a>
                </li>
                <li className="hover:underline">
                    <a href="#medicine">Medicine</a>
                </li>
                <li className="hover:underline">
                    <a href="#sports&outdoor">Sports & Outdoor</a>
                </li>
                <li className="hover:underline">
                    <a href="#babytoys">Baby's & Toys</a>
                </li>
                <li className="hover:underline">
                    <a href="#groceries&pets">Groceries & Pets</a>
                </li>
                <li className="hover:underline">
                    <a href="#health&beauty">Health & Beauty</a>
                </li>
            </ul>
         </div>
		)
}

export default SideMenuItems;

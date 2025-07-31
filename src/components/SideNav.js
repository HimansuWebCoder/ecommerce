import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function SideNavComp() {
    return (
        <div className="hidden lg:block h-auto col-span-1 font-poppins  border-r-2">
            <ul className="w-full grid grid-cols-1 gap-4 place-content-start">
                <li className=" flex justify-between  w-full">
                    <a href="#womansfashion">Woman's Fashion</a>
                       <MdOutlineKeyboardArrowRight className="mr-2" size="30"/>
                </li>
                <li className=" flex justify-between  w-full">
                    <a href="#mensfashion">Men's Fashion</a>
                    <MdOutlineKeyboardArrowRight className="mr-2" size="30"/>
                </li>
                <li className="">
                    <a href="#electronics">Electronics</a>
                </li>
                <li className="">
                    <a href="#home&lifestyle">Home & Lifestyle</a>
                </li>
                <li className="">
                    <a href="#medicine">Medicine</a>
                </li>
                <li className="">
                    <a href="#sports&outdoor">Sports & Outdoor</a>
                </li>
                <li className="">
                    <a href="#babytoys">Baby's & Toys</a>
                </li>
                <li className="">
                    <a href="#groceries&pets">Groceries & Pets</a>
                </li>
                <li className="">
                    <a href="#health&beauty">Health & Beauty</a>
                </li>
            </ul>
        </div>
    )
}

export default SideNavComp;

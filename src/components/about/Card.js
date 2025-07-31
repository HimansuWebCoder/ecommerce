import SupportContent from "../ui/SupportContent";
import { CiDollar } from "react-icons/ci";
function Card() {
	return (
         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 m-4 md:m-16">
         	<SupportContent style="border hover:bg-[#DB4444] hover:text-white rounded-lg" textSize="2xl" iconImg="./images/icon-shop.png" headline="10.5k " subheadline="Sallers active our site" />
         	<SupportContent style="border hover:bg-[#DB4444] hover:text-white rounded-lg" textSize="2xl" iconImg="./images/iconsale.png" headline="33k " subheadline="Monthly Produduct Sale" />
         	<SupportContent style="border hover:bg-[#DB4444] hover:text-white rounded-lg" textSize="2xl" iconImg="./images/Icon-Shopping-bag.png" headline="45.5k " subheadline="Customer active in our site" />
         	<SupportContent style="border hover:bg-[#DB4444] hover:text-white rounded-lg" textSize="2xl" iconImg="./images/Icon-Moneybag.png" headline="25k " subheadline="Anual gross sale in our site" />
         </div>
		)
}

export default Card;

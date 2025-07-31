import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import SupportContent from "./SupportContent";
function Support() {
    return (
        <div className="w-full flex justify-around  h-auto p-4 mt-4">
            <div className="w-fit h-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-4 ">
                <SupportContent iconImg="./images/icon-delivery.png" headline="FREE AND FAST DELIVERY" subheadline="Free delivery for all orders over $140"/>
                <SupportContent iconImg="./images/icon-customer-service.png" headline="24/7 CUSTOMER CARE SERVICE" subheadline="Friendly 24/7 customer support"/>
                <SupportContent iconImg="./images/icon-secure.png" headline="MONEY BACK GUARANTEE" subheadline="We return money within 30 days"/>
            </div>
        </div>
    )
}

export default Support;

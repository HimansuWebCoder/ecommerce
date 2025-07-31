import ProductCategory from "./ui/ProductCategory";
import HomeHeader from "./ui/HomeHeader";
import SubHeader from "./ui/SubHeader";
import Pagination from "./ui/Pagination";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { PiHeadphonesLight } from "react-icons/pi";
import { RiGamepadLine } from "react-icons/ri";

const productsCategory = [
    {
        name: "Phones",
        image: "https://cdn1.iconfinder.com/data/icons/general-9/500/phone-512.png",
        icon: CiMobile4,
    },
    {
        name: "Computers",
        image: "https://cdn1.iconfinder.com/data/icons/general-9/500/phone-512.png",
        icon: HiOutlineDesktopComputer,
    },
    {
        name: "SmartWatch",
        image: "https://cdn1.iconfinder.com/data/icons/general-9/500/phone-512.png",
        icon: BsSmartwatch,
    },
    {
        name: "Camera",
        image: "https://cdn1.iconfinder.com/data/icons/general-9/500/phone-512.png",
        icon: CiCamera,
    },
    {
        name: "Headphones",
        image: "https://cdn1.iconfinder.com/data/icons/general-9/500/phone-512.png",
        icon: PiHeadphonesLight,
    },
    {
        name: "Gaming",
        image: "https://cdn1.iconfinder.com/data/icons/general-9/500/phone-512.png",
        icon: RiGamepadLine,
    },
]

function ProductCategoryContainer() {
    return(
        <div className="max-w-full h-auto mt-4 m-4 lg:m-14 md:m-10 sm:m-8 flex flex-col">
            <div className="grid grid-cols-2 place-content-center">
                <div className="w-max">
                  <SubHeader name="Categories"/>
                  <HomeHeader name="Browse By Category"/>
                </div>
                <div className="w-full grid grid-cols-1 place-content-end place-items-end">
                    <Pagination />
                </div>
            </div>
            <div className="grid mt-4 grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-4 sm:grid-cols-2">
                {/* <ProductCategory /> */}
                {productsCategory.map(product => (
                    <div className="">
                        <ProductCategory name={product.name} icon={<product.icon size="60"/>} />
                    </div>
                ))}
            </div>
            <div></div>
        </div>
    )
}

export default ProductCategoryContainer;

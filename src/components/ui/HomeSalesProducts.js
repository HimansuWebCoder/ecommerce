import Discount from "./Discount";
import HeartIcon from "./HeartIcon";
import EyeIcon from "./EyeIcon";
import StarRating from "./Rating";
import IsProductNew from "./IsProductNew";
import AddToCart from "./AddToCart";
import ChoiceColor from "./ChoiceColor";
import DeleteIcon from "./DeleteIcon";

function HomeSalesProducts({itemName, isShowDeleteIcon = false, isShowEyeIcon = true, isCartIconShow = false, isShowHeartIcon = true, isShowColor = false, isShowStar = true, isCartShow = false, itemPrice, itemImg, isNew = false, originalPrice, discount, rating, isLike, isShow = true}) {
    return (
        // h-[200px] md:h-[300px] flex flex-col justify-between 
       <div className="grid grid-cols-1 gap-1 md:gap-3 mt-4">
            <div className="bg-[#f5f5f5] rounded-sm aspect-[1/1] relative md:p-12 p-8">
                <img className="w-full h-full object-contain" src={itemImg} alt="product image"/>
                <Discount price={`-${discount}%`} isShow={isShow}/>
                <IsProductNew isNew={isNew}/>
                <HeartIcon isShowHeartIcon={isShowHeartIcon}/>
                <EyeIcon isShowEyeIcon={isShowEyeIcon}/>
                <DeleteIcon size="8" isShowDeleteIcon={isShowDeleteIcon}/>
                <AddToCart isCartIconShow={isCartIconShow} isCartShow={isCartShow}/>
            </div>
            <div className="w-full text-left">
                <h3 className="text-sm md:text-xl line-clamp-1 md:line-clamp-none overflow-hidden text-ellipsis display [-webkit-box] 
              [-webkit-line-clamp:1] 
              [-webkit-box-orient:vertical] font-poppins">{itemName}</h3>
            </div>
            <div className="flex w-[90px] flex-wrap justify-between h-auto border-black">
                <div>
                    <p className="text-[#db4444] font-poppins">{itemPrice}</p>
                </div>
                <div>
                    <p className="text-gray-600 line-through font-poppins">{originalPrice}</p>
                </div>
            </div>
            <div>
                {/*<p>{rating}</p>*/}
             <StarRating countStar={rating} isShowStar={isShowStar} />
             <ChoiceColor isShowColor={isShowColor}/>
            </div>
       </div>
    )
}

export default HomeSalesProducts;


function ProductCategory({name, icon, isFocused}) {
    return (
        <div className="border aspect-[4/4] border-gray-300 rounded grid grid-cols-1 place-content-center place-items-center gap-4 hover:bg-[#db4444] hover:text-white justify-center items-center">
           <div className="flex justify-center items-center">
              {/* <img className="w-full h-full" src={image} alt="product image category" /> */}
              {icon}
           </div>
           <div>
              <p className="font-poppins">{name}</p>
           </div>
        </div>
    )
}

export default ProductCategory;

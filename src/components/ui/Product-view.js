function ProductViewsBtn({name}) {
    return (
        <div className="w-full h-auto text-center">
           <button className="bg-[#db4444] max-w-fit md:max-w-fit h-auto p-2 rounded text-white mt-4">
            <a className="font-poppins" href="">{name}</a>
          </button>
        </div>
        
    )
}

export default ProductViewsBtn;
function Button({name}) {
    return (
        <div className="w-full h-full text-center">
           <button className={`bg-[#db4444] w-full h-full p-2 rounded text-white`}>
            <a className="font-poppins" href="">{name}</a>
          </button>
        </div>
        
    )
}

export default Button;
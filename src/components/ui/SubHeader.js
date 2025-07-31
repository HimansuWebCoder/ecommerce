function SubHeader({name}) {
    return (
        <div className="w-full flex">
            <div className="w-auto flex justify-between items-center">
                <div className="w-5 mr-2 h-8 bg-[#db4444] rounded-md"></div>
                    <div>
                      <p className="text-[#db4444] font-poppins">{name}</p>
                    </div>
            </div>
        </div>
    )
}

export default SubHeader;

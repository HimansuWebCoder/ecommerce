function CategoryAdProduct() {
    return (
        <div className="max-w-full grid grid-cols-1 place-items-center place-content-center h-auto mt-4 m-2 lg:m-14 md:m-10 sm:m-8 ">
            <div className="w-full bg-[#000000] p-8 h-auto grid grid-cols-1 gap-4 md:grid-cols-2">
                {/*<div className="flex flex-col justify-evenly items-start border">*/}
                <div className="grid grid-cols-1 place-content-center place-items-start gap-4">
                    <div>
                        <p className="text-[#00ff66] text-xs md:text-xl font-poppins">Categories</p>
                    </div>
                    <div>
                        <h1 className="text-white text-4xl md:text-7xl font-bold font-inter">Enhance Your Music Experience</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 h-auto md:grid-cols-4 md:w-fit gap-4">
                        <div className="grid grid-cols-1 p-2 bg-white text-black place-content-center place-items-center rounded-full aspect-[1/1] border">
                            <div className="font-poppins font-bold text-lg">23</div>
                            <div className="font-poppins text-xs">Hours</div>
                        </div>
                        <div className="grid grid-cols-1 p-2 bg-white text-black place-content-center place-items-center rounded-full aspect-[1/1] border">
                            <div className="font-poppins font-bold text-lg">05</div>
                            <div className="font-poppins text-xs">Days</div>
                        </div>
                        <div className="grid grid-cols-1 p-2 bg-white text-black place-content-center place-items-center rounded-full aspect-[1/1] border">
                            <div className="font-poppins font-bold text-lg">59</div>
                            <div className="font-poppins text-xs">Minutes</div>
                        </div>
                        <div className="grid grid-cols-1 p-2 bg-white text-black place-content-center place-items-center rounded-full aspect-[1/1] border">
                            <div className="font-poppins font-bold text-lg">35</div>
                            <div className="font-poppins text-xs">Seconds</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-start h-auto">
                        <button className="text-white bg-[#00ff66] text-sm md:text-xl w-auto p-2 rounded h-full font-poppins">Buy Now!</button>
                    </div>
                </div>
                <div className="h-auto shadow-white/80">
                    <img className="w-full h-full " src="./images/speaker-banner.png" alt="image"/>
                </div>
            </div>
        </div>
    )
}

export default CategoryAdProduct;
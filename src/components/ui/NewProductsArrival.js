import HomeHeader from "./HomeHeader";
import SubHeader from "./SubHeader";
import Pagination from "./Pagination";
import ShopLinkBtn from "./ShopLinkBtn";
function NewProducts() {
    return (
        <div className="max-w-full m-4 sm:m-14 flex flex-col h-auto">
            <div className="w-full h-auto flex flex-col">
               <div className="w-full ">
                  <SubHeader name="Featured" />
               </div>
               <div className="w-full mt-4 justify-between flex ">
                  <div className="basis-1/2  h-auto flex  justify-between">
                     <HomeHeader name="New Arrival" />
                  </div>
               </div>
            </div>
            {/* 3 New Products Arrival */}
            {/*1st product arrival start*/}
            <div className="grid mt-4 md:grid-cols-7 grid-cols-1 gap-4">
                {/*1st product arrival start*/}
                <div className="relative grid grid-cols-1 col-span-4 md:col-span-3 bg-black text-white h-full border">
                        <div className="absolute bottom-20 left-6">
                                    <div className="mb-2">
                                        <h1 className="text-3xl font-bold">PlayStation 5</h1>
                                    </div>
                                    <div className="mt-2">
                                        <h3>Black and White version of the PS5 coming out on sale.</h3>
                                    </div>
                                    <ShopLinkBtn/>
                        </div>
                            <div className="w-full h-full bg-black">
                                <img className="w-full h-full object-contain" src="./images/playstation.png" alt="product new arrival" />
                            </div>
                </div>
                {/*1st product arrival end*/}
                {/*right side 3 product card*/}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-1 col-span-4">
                  {/*women's collection card start*/}
                    <div className="grid grid-cols-1 col-span-4 md:grid-cols-2 bg-[#0D0D0D] text-white place-content-center place-items-center md:place-items-end">
                        <div className=" grid grid-cols-1 p-4 gap-1 ml-3 bg-[#0D0D0D]">
                            <h1 className="text-3xl font-bold mb-2">Women’s Collections</h1>
                            <p className="mt-2">Featured woman collections that give you another vibe.</p>
                            <ShopLinkBtn/>
                        </div>
                        <div className="grid grid-cols-1 place-content-center place-items-center mr-5 bg-black">
                           <img className="w-full h-full object-contain" src="./images/woman.png" alt="product new arrival" />
                        </div>
                    </div>
                  {/*women's collection card end*/}
                    {/*2 products card below start*/}
                    <div className="grid grid-cols-1  col-span-4 gap-4 md:grid-cols-2">
                        <div className="bg-black p-2 relative text-white">
                            <div className="absolute bottom-14 left-6">
                                <div className="mb-2">
                                    <h1 className="text-3xl font-bold">Speakers</h1>
                                </div>
                                <div className="mt-2">
                                    <h3>Amazon Wireless Speakers</h3>
                                </div>
                                <ShopLinkBtn/>
                            </div>
                            <img className="w-full h-full object-contain p-2" src="./images/speaker.png" alt="product new arrival" />
                        </div>
                        <div className="bg-black p-2 relative text-white">
                             <div className="absolute bottom-14 left-6">
                                <div className="mb-2">
                                    <h1 className="text-xl sm:text-3xl font-bold">Perfume</h1>
                                </div>
                                <div className="mt-2">
                                    <h3>GUCCI INTENSE OUD EDP</h3>
                                </div>
                                <ShopLinkBtn/>
                            </div>
                            <img className="w-full h-full object-contain p-2" src="./images/perfume.png" alt="product new arrival" />
                        </div>
                    </div>
                    {/*2 products card below end*/}
                </div>
            </div>
        </div>
    )
}

export default NewProducts;
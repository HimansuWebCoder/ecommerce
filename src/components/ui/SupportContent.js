function SupportContent({iconImg, headline, style, textSize, subheadline}) {
    return (
        <div className={`${style}`}>
            <div className="flex flex-col gap-4 justify-center items-center text-center p-4">
                <div className="bg-black rounded-full p-2  border-gray border-8">
                     <img src={iconImg} alt="image" /> 
                </div>
                <div className="">
                    <h2 className={`text-${textSize} font-bold font-inter`}>{headline}</h2>
                </div>
                <div>
                    <p className="font-poppins">{subheadline}</p>
                </div>
            </div>
        </div>
    )
}

export default SupportContent;

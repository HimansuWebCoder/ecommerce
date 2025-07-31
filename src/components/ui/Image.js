function Image({image, altImage, style}) {
	return (
		 <div className={`${style}`}>
		 	 <img className="w-full h-full object-contain" src={image} alt={altImage} />
		 </div>
		)
}

export default Image;
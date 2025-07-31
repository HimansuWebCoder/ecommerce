function Item({image, altImg, name, price}) {
	return (
          <div className="flex w-full justify-between">
          	  <div className="basis-1/6  flex justify-start">
          	  	 <img className="w-10 h-10 object-contain" src={image} alt={altImg} />
          	  </div>

          	  <div className="flex basis-5/6 justify-between  items-center">
	          	  <div>
	          	  	  <h3 className="font-poppins">{name}</h3>
	          	  </div>
	          	  <div>
	          	  	 <h3 className="font-poppins">{price}</h3>
	          	  </div>
          	  </div>
          </div>
		)
}

export default Item;
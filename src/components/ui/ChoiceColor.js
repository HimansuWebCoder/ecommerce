function ChoiceColor({isShowColor}) {
	return (
          <div className="grid grid-cols-2 gap-2 place-content-start">
            {isShowColor ? (
            	<div className="max-w-10 grid grid-cols-2">
	                   <div className="">
	          	  	      <input className="accent-[#FB1314]" name="color" checked type="radio" />
		          	  </div>
		          	  <div className="">
	          	  	      <input className="accent-[#DB4444] bg-red-600 border-red-600" checked name="color" type="radio"  />
	          	      </div>
          	  </div>
            	) : null}
          </div>
		)
}

export default ChoiceColor;

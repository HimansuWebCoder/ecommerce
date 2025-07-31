function FormInput({name, inputCommonNameLabel, isRequired = false, placeholder}) {

    
	return (
		<div>
 			{isRequired ? (
			     <div className="w-full mt-6 rounded">
		 			  <li className="">
		 				<label className="font-poppins text-gray-500" required htmlFor={inputCommonNameLabel}>{name}*</label>
		 				<input className="w-full h-12 p-2 bg-[#F5F5F5] rounded focus:outline-none" type="text" name={inputCommonNameLabel} id={inputCommonNameLabel} />
		 			  </li>
			     </div>
 				) : (
	 				<div className="w-full mt-6 rounded">
		 			  <li className="">
		 				<label className="font-poppins text-gray-500" required htmlFor={inputCommonNameLabel}>{name}</label>
		 				<input className="w-full h-12 p-2 bg-[#F5F5F5] rounded focus:outline-none" type="text" name={inputCommonNameLabel} placeholder={placeholder} id={inputCommonNameLabel} />
		 			  </li>
			       </div>
 				)
 			}
 			</div>
		)
}

export default FormInput;

 // <div className="w-full mt-6 rounded">
 // 			<li className="">
 // 			{isRequired ? (
 // 				<label className="font-poppins text-gray-500" required htmlFor={inputCommonNameLabel}>{name}*</label>
 // 				) : (
 // 				<label className="font-poppins text-gray-500" htmlFor={inputCommonNameLabel}>{name}</label>
 // 				)}
 // 				<input className="w-full h-12 p-2 bg-gray-100 rounded focus:outline-none" type="text" name={inputCommonNameLabel} id={inputCommonNameLabel} />
 // 			</li>
// 		 </div>
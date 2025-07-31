function CheckType({checktypename, name, bgColor, width, height, placeholder, padding}) {
	return (
          <div className={`w-fit h-full rounded`}>
          	 <input className={`accent-${bgColor} w-full p-${padding} rounded focus:outline-none h-${height}`} placeholder={placeholder} type={checktypename} name={name} />
          </div>
		)
}

export default CheckType;

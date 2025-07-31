function Input({inputStyle, inputContainerStyle, inputType, placeholder}) {
	return (
		<div className={`${inputContainerStyle}`}>
			<input className={`${inputStyle}`} type={inputType} placeholder={placeholder} />
		</div>
		)
}

export default Input;
 
import { useState } from "react";

function IsHover({Component}) {
	const [ isHovering, setIsHovering ] = useState(false);

	const hoverHandler = () => {
		setIsHovering(!isHovering)
	}

	return (
         <div onClick={hoverHandler}>
              {
              	isHovering ? (<Component />) : null
              }        	
         </div>
		)
}

export default IsHover;

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ModalForm from "./ModalForm";

function Modal() {
	const [ isOpen, setIsOpen ] = useState(false)

   function modalHandler() {
   	  setIsOpen(!isOpen)
   }


	return (
         <div className=" max-w-full h-fit grid grid-cols-1 place-content-end place-items-end m-14" >
             <RxHamburgerMenu onClick={modalHandler}/>
         	 {isOpen ? (
                    <ModalForm display ="block"/>
         	 	) : null}
         </div>
		)
}

export default Modal;

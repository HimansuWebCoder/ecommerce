import Button from "../ui/Button";
function ContactForm() {
	return (
         <div className="grid grid-cols-1 shadow-md p-4 col-span-10 md:col-span-9 gap-6">
         	<form className="grid grid-cols-1 gap-4">
         	   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         		 <input className="border-gray-500 p-4 bg-[#F5F5F5] focus:outline-none text-gray-500 text-lg font-poppins rounded" type="text" placeholder="Your Name *" required />
         		 <input className="border-gray-500 p-4 bg-[#F5F5F5] focus:outline-none text-gray-500 text-lg font-poppins rounded" type="text" placeholder="Your Email *" required />
         		 <input className="border-gray-500 p-4 bg-[#F5F5F5] focus:outline-none text-gray-500 text-lg font-poppins rounded" type="text" placeholder="Your Phone *" required />
         	   </div>
         		 <textarea className="w-full h-60 p-2 text-lg text-gray-500 bg-[#F5F5F5] font-poppins" type="textarea" rows="" cols="">Your Massage</textarea>
         	</form>
         	<div className="w-full grid grid-cols-1 place-content-end place-items-end">
         	    <div className="w-56 grid grid-cols-1">
             		<Button name="Send Message" />
         	    </div>
         	</div>
         </div>
		)
}

export default ContactForm;
function ContactInfo() {
	return (
		 <div className="col-span-10 md:col-span-3 shadow-md p-4 grid gap-4">
		 	 <div className="flex flex-start gap-2 ">
		 	 	 {/*<div className="grid grid-cols-6 col-span-4  place-content-start place-items-start">*/}
		 	 	 	 <div className="w-10 h-10 md:w-10 md:h-10">
		 	 	 	 	 <img className="w-full h-full object-contain" src="./images/icons-mail.png" alt="mail icon" />
		 	 	 	 </div>
		 	 	 	 <div className="font-poppins text-2xl font-medium col-span-6 text-center  place-self-center">
		 	 	 	 	Call To Us
		 	 	 	 </div>
		 	 	 {/*</div>*/}
		 	 </div>
		 	 <div className=" w-full">
		 	 	<p className="font-poppins">We are available 24/7, 7 days a week.</p>
		 	 </div>
		 	 <div className=" w-full">
		 	 	<p className="font-poppins">Phone: +8801611112222</p>
		 	 </div>
		 	 <div className="border border-gray-500">
		 	 </div>
		 	 <div className="flex flex-start gap-2">
		 	 	 	 <div className="w-10 h-10 md:w-10 md:h-10">
		 	 	 	 	 <img className="w-full h-full object-contain" src="./images/icons-phone.png" alt="call icon" />
		 	 	 	 </div>
		 	 	 	 <div className="font-poppins text-2xl font-medium col-span-6 text-center  place-self-center">
		 	 	 	 	Write To US
		 	 	 	 </div>
		 	 </div>
		 	 <div>
		 	 	<p className="font-poppins">Fill out our form and we will contact you within 24 hours.</p>
		 	 </div>
		 	 <div>
		 	 	<p className="font-poppins">Emails: customer@exclusive.com</p>
		 	 </div>
		 	 <div>
		 	 	<p className="font-poppins">Emails: support@exclusive.com</p>
		 	 </div>
		 </div>
		)
}


export default ContactInfo;

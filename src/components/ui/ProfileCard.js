function ProfileCard({name, profession, image, altImg}) {
	return (
           <div className=" m-2 grid grid-cols-1 col-span-2 gap-4">
           	   <div className="w-full h-[400px] bg-[#F5F5F5]">
           	   	  <img className="w-full h-full object-contain" src={image} alt={altImg} />
           	   </div>
           	   <div className=" grid gap-2">
           	   	   <div className=" w-full">
           	   	   	  <h2 className="text-xl font-bold font-inter">{name}</h2>
           	   	   </div>
           	   	   <div className=" w-full">
           	   	   	 <p className="font-poppins text-md">{profession}</p>
           	   	   </div>
           	   	   <div className=" grid grid-cols-2 md:grid-cols-4">
           	   	   	    <div className=" grid grid-cols-3 m-2">
           	   	   	    	<div className="w-5 h-5 ">
           	   	   	    		<img className="w-full h-full object-contain" src="./images/Icon-Twitter.png" alt="" />
           	   	   	    	</div>
           	   	   	    	<div className="w-5 h-5 ">
           	   	   	    		<img className="w-full h-full object-contain" src="./images/icon-instagram.png" alt="" />
           	   	   	    	</div>
           	   	   	    	<div className="w-5 h-5 ">
           	   	   	    		<img className="w-full h-full object-contain" src="./images/Icon-Linkedin.png" alt="" />
           	   	   	    	</div>
           	   	   	    </div>
           	   	   </div>
           	   </div>
           </div>
		 )
}

export default ProfileCard;
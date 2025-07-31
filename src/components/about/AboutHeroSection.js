function AboutHeroSection() {
	return (
         <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 m-4 md:m-0">
            <div className=" p-0 md:p-20">
            	<div className="grid gap-4">
            		<div>
            			<h1 className="font-inter font-medium text-6xl tracking-wider">Our Story</h1>
            		</div>
            		<div className="">
            			<p className="font-poppins leading-7">
            				Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            			</p>
            		</div>
            		<div className="">
            			<p className="font-poppins leading-7">
            				Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
            			</p>
            		</div>
            	</div>
            </div>
            <div className="">
            	<img src="./images/about-shop-hero-image.png" alt="" />
            </div>
         </div>
		)
}

export default AboutHeroSection;

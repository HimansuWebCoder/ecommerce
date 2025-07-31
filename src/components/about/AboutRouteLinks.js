import {Link} from "react-router";
function AboutRouteLinks() {
	return (
         <div className="flex gap-2 md:text-base text-sm  max-w-full flex-wrap m-4 md:m-16">
          	 <div className="font-poppins">
          		<Link to="/">Home</Link>
          	 </div>
          		<div>/</div>
          	 <div className="font-poppins">
          		<Link to="/about">About</Link>
          	 </div>
         </div>
		)
}

export default AboutRouteLinks;

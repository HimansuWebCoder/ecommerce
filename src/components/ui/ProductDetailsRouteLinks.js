import {Link} from "react-router";
function ProductDetailsRouteLinks() {
	return (
          <div className="flex m-4 md:m-14 justify-between max-w-full items-center">
          		<div className="flex gap-2 md:text-base text-sm  max-w-full flex-wrap justify-center items-center">
          			        <div>
                             <Link className="font-poppins">Account</Link>            
                         </div>
          			         <div>/</div>
          			         <div>
                            <Link className="font-poppins">Gaming</Link>            
                           </div>
                         <div>/</div>
                           <div>
                            <Link className="font-poppins">Havic HV G-92 Gamepad</Link>            
                           </div>
          		</div>
          	</div>
		)
}

export default ProductDetailsRouteLinks;
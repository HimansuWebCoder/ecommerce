import {Link} from "react-router";
function AccountPageSideNavBar() {
	return (
          <div className="flex m-4 md:m-14 justify-between max-w-full items-center">
          		<div className="flex gap-2 md:text-base text-sm  max-w-full flex-wrap justify-center items-center">
          			<div>
                             <Link>Home</Link>            
                         </div>
          			<div>/</div>
          			<div>
                            <Link>My Account</Link>            
                         </div>
          		</div>
      		    <div>
                  <p className="md:text-base">Welcome! <span className="text-red-500">Md Rimel</span></p>        
                </div>
          	</div>
		)
}

export default AccountPageSideNavBar;
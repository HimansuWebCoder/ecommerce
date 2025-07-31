import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EditProfileForm from "../ui/EditProfileForm";
import MyAccountSideNavMenu from "../ui/MyAccountSideNavMenu";
import AccountPageSideNavBar from "../ui/AccountPageSideNavBar";
import AccountToggleSideHamburger from "../ui/AccountToggleSideHamburger";
import { useLocation } from 'react-router';
import RouteBasedLogic from "../ui/RouteBasedLogic";
function Account() {
     const location = useLocation();
     const isAccountPageRoute = location.pathname.startsWith("/account");
	return (
          <div>
          	<Header/>
          	<Navbar/>
          	<AccountPageSideNavBar/>
          	<div className="grid grid-cols-6 m-4 md:m-14">
               {/* Account side bar nav menu start*/}
                 <div className="w-full">
                    <div className="hidden md:block">
                      <MyAccountSideNavMenu/>
                    </div>
                    {/*{isAccountPageRoute && <AccountToggleSideHamburger/>}*/}
                    <RouteBasedLogic route="/account" ComponentName={AccountToggleSideHamburger}/>
                 </div>
               {/* Account side bar nav menu end*/}
               <EditProfileForm/>
          	</div>
          	<Footer/>
          </div>
		)
}

export default Account;
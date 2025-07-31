import { Link } from "react-router";
function NavMenu() {
	return (
         <div className="max-w-[800px] text-xl p-4 md:p-0 md:w-[500px] h-auto grid md:text-black text-white grid-cols-1 md:place-content-center md:place-items-center">
            <ul className="grid grid-cols-1 place-content-start md:place-content-center place-items-start md:place-items-center md:w-full gap-1 md:grid-cols-4 font-poppins">
              <li className="hover:underline">
                    <Link to="/">Home</Link>
              </li>
              <li className="hover:underline">
                  <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:underline">
                  <Link to="/about">About</Link>
              </li>
              <li className="hover:underline">
                  <Link to="/signup">Sign Up</Link>
              </li>
            </ul> 
         </div>
		)
}

export default NavMenu;

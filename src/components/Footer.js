import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router";
function Footer() {
    return (
        <div className="w-full bg-black text-white">
             <div className="w-full flex">
                <div className="grid grid-cols-1 p-4 md:p-14 gap-10 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
                    {/* Exclusive Footer*/}
                    <div className="grid grid-cols-1 place-content-start gap-2 place-items-start">
                        <div className="">
                            <h1 className="text-2xl font-bold font-inter">Exclusive</h1>
                        </div>
                        <div className="mt-2">
                            <h2 className="text-md font-bold font-poppins">Subscribe</h2>
                        </div>
                        <div className="mt-2">
                            <p className="font-poppins">Get 10% off your first order</p>
                        </div>
                        <div className="mt-2 w-fit border flex rounded-lg justify-center items-center">
                            <input className="p-2 max-w-[10rem] font-poppins focus:outline-none h-fit bg-black rounded-lg" placeholder="Enter your email" />
                            <div className="p-2">
                                <img src="./images/icon-send.png" alt="send email icon" />
                            </div>
                        </div>
                    </div>
                    {/* Support links */}
                    <div className=" grid grid-cols-1 gap-3 place-content-start place-items-start">
                       <div className="">
                         <h1 className="text-xl font-bold font-poppins">Support</h1>
                       </div>
                       <div className="">
                         <p className="font-poppins">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                       </div>
                       <div className="">
                         <p className="font-poppins">exclusive@gmail.com</p>
                       </div>
                       <div className="">
                         <p className="font-poppins">+88015-88888-9999</p>
                       </div>
                    </div>
                    {/* Account Links */}
                    <div className=" grid grid-cols-1 gap-2 place-content-start place-items-start">
                        <div className="">
                            <h1 className="text-xl font-bold font-poppins">Account</h1>
                        </div>
                        <ul className="grid grid-cols-1 gap-4">
                            <li className="">
                                <Link className="font-poppins" to="/account">My Account</Link>
                            </li>
                            <li className="">
                                <Link className="font-poppins" to="/signup">Login / Register</Link>
                            </li>
                            <li className="">
                                <Link className="font-poppins" to="/cart">Cart</Link>
                            </li>
                            <li className="">
                                <Link className="font-poppins" to="/wishlist">Wishlist</Link>
                            </li>
                            <li className="">
                                <Link className="font-poppins" to="/productdetails">Shop</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Quick Links */}
                    <div className=" grid grid-cols-1 gap-2 place-content-start place-items-start">
                        <div>
                            <h1 className="text-xl font-bold font-poppins">Quick Links</h1>
                        </div>
                        <ul className="grid grid-cols-1 gap-4">
                            <li className="">
                                <a href="" className="font-poppins">Privacy Policy</a>
                            </li>
                            <li className="">
                                <a href="" className="font-poppins">Terms Of Use</a>
                            </li>
                            <li className="">
                                <a href="" className="font-poppins">FAQ</a>
                            </li>
                            <li className="">
                                <Link className="font-poppins" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Download App section */}
                    <div className="grid grid-cols-1 gap-3 place-content-start place-items-start">
                        <div>
                            <h1 className="text-xl font-bold font-poppins">Download App</h1>
                        </div>
                        <div className="max-w-full">
                            <p className="font-poppins">Save $3 with App New User Only</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 ">
                            <div className="w-fit h-fit">
                                <img className="w-fit h-fit object-cover" src="./images/scanner.png"/>
                            </div>
                            <div className="w-fit grid grid-cols-1 gap-2 place-content-evenly">
                                <div className="w-fit h-fit border rounded-lg p-2">
                                    <img className="w-fit h-fit object-cover" src="/images/googleplaystore.png"/>
                                </div>
                                <div className="w-fit h-fit border rounded-lg p-2">
                                    <img className="w-fit h-fit object-cover" src="/images/apple-store.png"/>
                                </div>
                            </div>
                        </div>
                        {/* Social links */}
                        <div className="flex mt-4">
                            <div className="m-2">
                                <img src="./images/facebookIcon.png" alt="Facebook" />
                            </div>
                            <div className="m-2">
                                <img src="./images/twitterIcon.png" alt="Twitter" />
                            </div>
                            <div className="m-2">
                                <img src="./images/instagramIcon.png" alt="Instagram" />
                            </div>
                            <div className="m-2">
                                <img src="./images/linkedinIcon.png" alt="LinkedIn" />
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <div className="w-full p-2 flex justify-center">
                 <div>
                    <p className="text-gray-500 font-poppins">©Copyright Rimel 2022. All right reserved</p>
                 </div>
             </div>
        </div>
    )
}

export default Footer;

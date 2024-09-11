import { Link } from "react-router-dom";
import FB from "../assets/images/facebook.png"
import INSTA from "../assets/images/instagram.png"
import WHATSAPP from "../assets/images/whatsapp.png"

const Footer = () => {
    return (
        <div className="bg-[#F6EFF6] font-helvetica text-[#87769D] flex flex-col px-40 pt-10 gap-20">
            <div className="flex">
                <div className="grid grid-cols-3 gap-x-32 gap-y-8">
                    <div className="flex flex-col gap-1">
                        <div className="font-inter text-[#4F3267] text-sm font-medium">
                            <span>Online Shopping</span>
                        </div>
                        <div className="text-sm">
                            <ul className="flex flex-col gap-1">
                                <li>Rings</li>
                                <li>Earrings</li>
                                <li>Braclets </li>
                                <li>Solitaires</li>
                                <li>Mangalsutras</li>
                                <li>Necklaces</li>
                                <li>More Jewellery</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-inter text-[#4F3267] text-sm font-medium">
                            <span>Know Your Jewelry</span>
                        </div>
                        <div className="text-sm">
                            <ul className="flex flex-col gap-1">
                                <li>Diamond Guide</li>
                                <li>Jewelry Guide</li>
                                <li>Gemstone Guide</li>
                                <Link to={"/prices"}><li>Calculate Gold Rate**</li></Link>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-inter text-[#4F3267] text-sm font-medium">
                            <span>About Us</span>
                        </div>
                        <div className="text-sm">
                            <span>Our Story</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-inter text-[#4F3267] text-sm font-medium">
                            <span>Popular Searches</span>
                        </div>
                        <div className="text-sm">
                            <ul className="flex flex-col gap-1">
                                <li>Mangalsutra</li>
                                <li>Bracelets for Women</li>
                                <li>Gifting</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-inter text-[#4F3267] text-sm font-medium">
                            <span>Customer Service</span>
                        </div>
                        <div className="text-sm">
                            <ul className="flex flex-col gap-1">
                                <li>Return Policy</li>
                                <li>Order Status</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-inter text-[#4F3267] text-sm font-medium">
                            <span>Contact</span>
                        </div>
                        <div className="text-sm">
                            <ul className="flex flex-col gap-1">
                                <li>Phone: +1 (844) 922-2728</li>
                                <li>Email:contactus@amaarahjewellery.com</li>
                                <li>Address: XYZ 123, INDIA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="font-inter text-[#4F3267] text-sm font-medium">
                            <span>Contact us via email</span>
                        </div>
                        <div className="flex">
                            <div className="p-[1.7px] bg-gradient-to-r from-[#DE57E5] to-[#8863FB]">
                                <input
                                    type="text"
                                    className="bg-[#F6EFF6] placeholder:text-[#4F3267] placeholder:text-[0.88rem] placeholder:font-helvetica placeholder:p-2"
                                    placeholder="Type Message"
                                />
                            </div>
                            <div className="bg-[#652267] text-[#FFFFFF]">
                                <button className="text-xs px-3 font-helvetica">Send</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex gap-1">
                        <img src={FB} className="h-6" alt="" />
                        <img src={INSTA} className="h-6" alt="" />
                        <img src={WHATSAPP} className="h-6" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col text-xs gap-2">
                    <span className="text-[#8863FB]">COPYRIGHT amaarahjeweller © 2024</span>
                    <span className="text-[#4F3267] uppercase">Faq | Privacy Policy | Terms & Conditions</span>
                </div>
                <div>
                    <button></button>
                </div>
            </div>
        </div>
    )
};

export default Footer;
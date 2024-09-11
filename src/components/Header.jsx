import LOGO from "../assets/images/logo.png";
import NAME from "../assets/images/logo_name.png";
import SEARCH from "../assets/images/search.png";
import MARK1 from "../assets/images/mark1.png";
import MARK2 from "../assets/images/mark2.png";
import MARK3 from "../assets/images/mark3.png";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="bg-[#652267] flex font-abeezee text-[#F4EAAD] gap-28 justify-centre">
            <div className="flex items-center justify-center">
                <div>
                    <img src={LOGO} className="h-12 my-2" alt="" />
                </div>
                <div>
                    <img src={NAME} className="h-9 mt-3" alt="" />
                </div>
            </div>
            <div className="flex gap-44">
                <div className="flex gap-3 text-[0.7rem] mt-5 items-center font-thin tracking-[0.16rem]">
                    <img src={SEARCH} className="h-[1.1rem] mb-0.5" alt="" />
                    <span>PRODUCTS</span>
                </div>
                <div className="flex gap-10 text-[0.65rem] mt-9 tracking-[0.16rem]">
                    <Link to={"/rings"}><span>RINGS</span></Link>
                <Link to={"/joy-stud-earrings"}><span>EARRINGS</span></Link>
                    
                    <span>BRACELETS & BANGLES</span>
                    <span>NECKLACES</span>
                    <Link to={"/about"}><span>ABOUT US</span></Link>
                    <Link to={"/contact"}><span>CONTACT US</span></Link>
                    
                </div>
            </div>
            <div className="flex gap-5 mt-8 pl-44">
                <img src={MARK1} className="h-[1.2rem]" alt="" />
                <Link to={"/admin-panel"}><img src={MARK2} className="h-[1.2rem]" alt="" /></Link>
                
                <img src={MARK3} className="h-[1.2rem]" alt="" />
            </div>
        </div>
    )
}

export default Header;
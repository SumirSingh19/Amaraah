import { useState } from "react";
import LOGO from "../../assets/images/logo.png";
import SHOP from "../../assets/images/shopping-bag.png";
import USER from "../../assets/images/user.png";
import TREND from "../../assets/images/trending-up.png";
import SEARCH from "../../assets/images/search (1).png";
import BOOK from "../../assets/images/book.png";

const Sidebar = ({ setSelectedPage }) => {
    const [selected, setSelected] = useState(0); // State to track the selected icon

    const menuItems = [
        { icon: SHOP, alt: "Product Add" },
        { icon: USER, alt: "User Profile" },
        { icon: TREND, alt: "Trending" },
        { icon: SEARCH, alt: "Search" },
        { icon: BOOK, alt: "Dashboard" },
    ];

    const handleIconClick = (index) => {
        setSelected(index); // Set the selected icon for highlighting
        setSelectedPage(index); // Set the selected page in AdminPanel
    };

    return (
        <div className="flex flex-col items-center h-full bg-[#652267] p-4 space-y-6">
            <div>
                <img src={LOGO} className="w-28 mb-20" alt="Logo" />
            </div>

            {/* Render all icons dynamically */}
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className={`p-3 rounded-lg cursor-pointer ${selected === index ? 'bg-[#F5E5B5] text-[#2A022C]' : 'bg-[#2A022C]'}`}
                    onClick={() => handleIconClick(index)} // Set the selected icon on click
                >
                    <img
                        src={item.icon}
                        alt={item.alt}
                        className={`w-8 h-8 ${selected === index ? 'filter invert sepia saturate-100 hue-rotate-[80deg] brightness-100 contrast-100' : 'filter brightness-0 invert'}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

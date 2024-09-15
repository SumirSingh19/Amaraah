import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import LOGO from "../../assets/images/logo.png";
import SHOP from "../../assets/images/shopping-bag.png";
import USER from "../../assets/images/user.png";
import TREND from "../../assets/images/trending-up.png";
import SEARCH from "../../assets/images/search (1).png";
import BOOK from "../../assets/images/book.png";

const Sidebar = () => {
    const [selected, setSelected] = useState(0); // State to track the selected icon
    const navigate = useNavigate(); // Initialize useNavigate hook

    const menuItems = [
        { icon: SHOP, alt: "Product Add", path: "/admin/product-add" },
        { icon: USER, alt: "User Profile", path: "/admin/user-profile" },
        { icon: TREND, alt: "Trending", path: "/admin/trending" },
        { icon: SEARCH, alt: "Search", path: "/admin/search" },
        { icon: BOOK, alt: "Dashboard", path: "/admin/dashboard" }, // Path to Dashboard route
    ];

    const handleIconClick = (index, path) => {
        setSelected(index); // Set the selected icon for highlighting
        navigate(path); // Navigate to the associated path
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
                    onClick={() => handleIconClick(index, item.path)} // Set the selected icon and navigate to the path on click
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

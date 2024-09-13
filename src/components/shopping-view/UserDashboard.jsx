import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import LOGO from '../../assets/images/logo.png';

const UserDashboard = () => {
    const [selectedPage, setSelectedPage] = useState(0);

    const menuItems = [
        { name: 'Profile', link: '/user/profile' },
        { name: 'Orders', link: '/user/orders' },
        { name: 'Cart', link: '/user/cart' },
        { name: 'Wishlist', link: '/user/wishlist' },
        { name: 'Address Book', link: '/user/address-book' },
        { name: 'Settings', link: '/user/settings' },
    ];

    return (
        <div className="flex h-full bg-[#F8F8F8]">
            {/* Sidebar */}
            <div className="w-64 bg-[#652267] p-6">
                <img src={LOGO} alt="Logo" className="w-28 mb-8" />
                <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.link}
                                className={`block p-3 rounded-lg ${selectedPage === index ? 'bg-[#F5E5B5] text-[#2A022C]' : 'text-white'}`}
                                onClick={() => setSelectedPage(index)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Dynamic Content */}
            <div className="flex-1 p-6">
                <Outlet /> {/* This will render the selected child page */}
            </div>
        </div>
    );
};

export default UserDashboard;

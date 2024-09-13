import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminPanel = () => {
    const [selectedPage, setSelectedPage] = useState(0); // State to track the selected page

    return (
        <div className="flex gap-20 bg-[#F8F8F8]">
            <div>
                <Sidebar setSelectedPage={setSelectedPage} /> {/* Pass the setter function to Sidebar */}
            </div>
            <div className="p-5 py-16">
                <Outlet /> {/* This will render the child routes based on current route */}
            </div>
        </div>
    );
};

export default AdminPanel;

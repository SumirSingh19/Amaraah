import { useState } from "react";

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="pl-6 bg-[#F8F8F8] min-h-screen">
            <h2 className="text-2xl font-semibold mb-6 text-[#1C2A53]">Settings</h2>
            <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-lg space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-[#8E95A9] text-lg">Notifications</span>
                    <input
                        type="checkbox"
                        checked={notifications}
                        onChange={() => setNotifications(!notifications)}
                        className="cursor-pointer"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[#8E95A9] text-lg">Dark Mode</span>
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        className="cursor-pointer"
                    />
                </div>
                <button className="bg-[#652267] text-white p-2 rounded hover:bg-[#8B3A81]">Save Changes</button>
            </div>
        </div>
    );
};

export default Settings;

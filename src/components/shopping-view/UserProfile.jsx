import { useAuth } from "../useAuth";

const UserProfile = () => {
    const { user } = useAuth();
    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Profile</h2>
            {Object.entries(user).map(([key, value], index) => (
                <div key={index} className="mb-4">
                    <p className="text-sm text-[#8E95A9]">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </p>
                    <p className="text-lg">{value}</p>
                </div>
            ))}
            <button className="bg-[#652267] text-white p-2 rounded hover:bg-[#8B3A81]">
                Edit Profile
            </button>
        </div>
    );
};

export default UserProfile;

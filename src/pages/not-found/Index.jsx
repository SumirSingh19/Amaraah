import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="bg-[#652267] min-h-screen flex flex-col justify-center items-center text-[#F4EAAD] font-abeezee">
            {/* Title Section */}
            <h1 className="text-8xl font-bold mt-16">404</h1>
            <h2 className="text-3xl mt-6">Page Not Found</h2>
            <p className="text-lg mt-4 max-w-lg text-center">
                The page you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-6 mt-8">
                <Link
                    to="/"
                    className="bg-[#F4EAAD] text-[#652267] px-6 py-2 rounded-full font-bold hover:bg-[#e3d68a] transition"
                >
                    Back to Home
                </Link>
                <Link
                    to="/contact"
                    className="border border-[#F4EAAD] text-[#F4EAAD] px-6 py-2 rounded-full hover:bg-[#823084] transition"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default NotFound;

const GoldPrices = () => {
    return (
        <div className="px-60 p-10 font-quattrocento">
            {/* Title */}
            <div className="uppercase font-nephilm text-4xl text-[#6D6D6D]">
                <span>Gold Prices</span>
            </div>

            {/* Calculator Section */}
            <div className="bg-[#EFEFEF] p-6 mt-6">
                <div className="text-xl text-[#BA963F] mb-4">
                    1. Choose Your Carat Value
                </div>
                <input 
                    type="number" 
                    className="border border-[#333333] w-full p-2 mb-4 bg-[#EFEFEF] placeholder:text-[#333333]"
                    placeholder="9"
                />
                <div className="text-xl text-[#BA963F] mb-4">
                    2. Enter the Weight
                </div>
                <div className="flex items-center mb-6">
                    <input 
                        type="number" 
                        className="border border-[#333333] w-full p-2 bg-[#EFEFEF] placeholder:text-[#333333]"
                        placeholder="Enter the weight"
                    />
                    <span className="ml-2 font-bold">Grams</span>
                </div>
                <button className="bg-[#5D2A67] text-[#F4EAAD] py-2 px-6 text-xl w-full">
                    Calculate
                </button>
                <div className="text-lg mt-4 text-[#BA963F]">
                    Approximate Price (in INR)
                </div>
                <div className="text-4xl mt-2">...</div>
            </div>

            {/* Link Section */}
            <div className="text-left mt-6">
                <a href="#" className="text-[#C9A344] underline">
                    Click here to get more gold rates
                </a>
            </div>

            {/* Live Gold Price Board Section */}
            <div className="mt-6 font-quattrocento">
                <div className="bg-[#5D2A67] text-[#F4EAAD] text-center py-2">
                    Live Gold Price Board (INR)
                </div>
                <ul className="flex gap-1 justify-center items-center w-full mt-1 border-collapse text-center text-[#333333]">
                    <div className="flex flex-col gap-1 py-2 font-bold w-full">
                        <li className="bg-[#F7F7F7] p-1">24k Gold Items</li>
                        <li className="bg-[#F7F7F7] p-1">22k Gold Items</li>
                        <li className="bg-[#F7F7F7] p-1">18k Gold Items</li>
                        <li className="bg-[#F7F7F7] p-1">14k Gold Items</li>
                        <li className="bg-[#F7F7F7] p-1">10k Gold Items</li>
                    </div>
                    <div className="flex flex-col gap-1 w-full py-2 font-normal text-center">
                        <li className="bg-[#F7F7F7] p-1">6,560.05 Per Gram</li>
                        <li className="bg-[#F7F7F7] p-1">6,013.38 Per Gram</li>
                        <li className="bg-[#F7F7F7] p-1">4,920.04 Per Gram</li>
                        <li className="bg-[#F7F7F7] p-1">2,460.02 Per Gram</li>
                        <li className="bg-[#F7F7F7] p-1">2,460.02 Per Gram</li>
                    </div>
                </ul>
            </div>

            {/* Live Gold Rates on YouTube Section */}
            <div className="mt-16 font-quattrocento">
                <div className="bg-[#5D2A67] text-[#E2D1A4] text-center py-2">
                    LIVE Gold Rates on YouTube
                </div>
            </div>

            {/* How Does It Work Section */}
            <div className="mt-6 p-4">
                <div className="text-xl text-[#B89D42]">
                    How does it work?
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <p>
                        This gold calculator uses real-time Indian gold prices to calculate the value of your gold. If you know how much your gold weighs and it&apos;s purity
                        (carat), enter the value into the calculator then click &apos;calculate&apos; to receive an instant estimation of how much your gold is worth.
                    </p>
                    <p>
                        This calculator provides you an idea on what price you could get for your gold if you were to sell it in India. The selling price will vary
                        depending on time and location.
                    </p>
                </div>
                
            </div>

            {/* About Our Live Gold Price Section */}
            <div className="mt-6 p-4">
                <div className="text-xl text-[#A98939]">
                    About our live gold price
                </div>
                <p className="mt-2">
                    The Live Gold Price we use to help you estimate the current Karat Value of your Gold is sourced from multiple, trusted gold price services from
                    India and across the world. The current live gold price is <span className="font-bold">204,040.30 (ozt)</span>. This price is a general price only and is not location specific
                    (eg. Chennai, Mumbai, Delhi, Bangalore, Kerala, hyderabad). For the latest gold prices for India and locations within India visit <span className="text-[#428BCA]">Gold Price Live India</span>
                </p>
            </div>
        </div>
    );
};

export default GoldPrices;

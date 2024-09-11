import PIC from "../assets/images/marp.png";

const Contact = () => {
    return (
        <div className="p-20">
            <div className="text-gray-600 mb-8 font-cormorant px-28">
                <span className="font-bold">Home</span>
                <span className="mx-2">»</span>
                <span>Contact</span>
            </div>
            <div className="font-nephilm flex gap-28 px-20">
                <div className="flex-1 bg-[#FEFCF6] p-9 px-20">
                    <span className="uppercase text-4xl text-[#6D6D6D] mb-8 block">Ask Us Anything</span>
                    <form action="" className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <input 
                                type="text" 
                                placeholder="First Name *" 
                                className="border bg-[#FEFCF6] border-gray-300 p-4 rounded-md focus:outline-none focus:border-[#666] focus:ring-2 focus:ring-[#666] placeholder:font-cormorant placeholder:italic placeholder:text-[#5A5A5A] placeholder:text-lg" 
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name *" 
                                className="border bg-[#FEFCF6] border-gray-300 p-4 rounded-md focus:outline-none focus:border-[#666] focus:ring-2 focus:ring-[#666] placeholder:font-cormorant placeholder:italic placeholder:text-[#5A5A5A] placeholder:text-lg" 
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                <span className="bg-gray-200 p-4 text-black font-cormorant italic">+91</span>
                                <input 
                                    type="tel" 
                                    placeholder="Contact No." 
                                    className="p-4 w-full bg-[#FEFCF6] focus:outline-none focus:ring-0 focus:border-transparent placeholder:font-cormorant placeholder:italic placeholder:text-[#5A5A5A] placeholder:text-lg"
                                />
                            </div>
                            <input 
                                type="email" 
                                placeholder="Email Address *" 
                                className="border bg-[#FEFCF6] border-gray-300 p-4 rounded-md focus:outline-none focus:border-[#666] focus:ring-2 focus:ring-[#666] placeholder:font-cormorant placeholder:italic placeholder:text-[#5A5A5A] placeholder:text-lg" 
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <input 
                                type="text" 
                                placeholder="City" 
                                className="border bg-[#FEFCF6] border-gray-300 p-4 rounded-md focus:outline-none focus:border-[#666] focus:ring-2 focus:ring-[#666] placeholder:font-cormorant placeholder:italic placeholder:text-[#5A5A5A] w-[21.5rem] placeholder:text-lg" 
                            />
                            <input 
                                type="text" 
                                 
                                className="border bg-[#FEFCF6] border-gray-300 p-4 rounded-md focus:outline-none focus:border-[#666] focus:ring-2 focus:ring-[#666] h-[10rem] placeholder:text-lg" 
                            />
                        </div>
                        <div>
                        <button 
                            type="submit" 
                            className="bg-[#6A3077] font-lato text-white text-sm px-5 py-3 uppercase tracking-widest hover:bg-[#5a2765] transition-all duration-300"
                        >
                            Submit
                        </button>
                        </div>
                        <div className="uppercase text-[#6D6D6D] pt-40 text-base">
                            <span>contact us :   @amaarahjewellery.com</span>
                        </div>
                    </form>
                </div>
                <div className="flex-1">
                    <img src={PIC} alt="Contact Us" className="rounded-xl w-[34rem]" />
                </div>
            </div>
        </div>
    );
};

export default Contact;

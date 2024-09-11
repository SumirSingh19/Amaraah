import PIC1 from "../assets/images/image176.png";
import PIC2 from "../assets/images/image178.png";
import PIC3 from "../assets/images/image177.png";

const Expertise = () => {
    return (
        <div className="flex flex-col gap-20 py-40">
            <div className="font-nephilm text-[#6D6D6D] text-7xl pl-2">
                <span>Expertise</span>
            </div>
            <div className="flex gap-5">
                <div className="group relative flex flex-col w-[27rem] bg-[#E4E4E4] rounded-xl overflow-hidden">
                    <div>
                        <img src={PIC1} className="h-[30.58rem] w-full rounded-xl" alt="" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-[#E4E4E4] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <div className="flex flex-col font-barlow text-center gap-2 text-[#6D6D6D] pt-2 px-3 pb-5">
                            <span className="text-xl">Customization</span>
                            <span>Bring us out-of-style jewellery to re-design. Now wear trendy ancestral blessings without losing the core value of the piece.</span>
                        </div>
                    </div>
                </div>
                <div className="group relative flex flex-col w-[27rem] bg-[#E4E4E4] rounded-xl overflow-hidden">
                    <div>
                        <img src={PIC2} className="h-[30.58rem] w-full rounded-xl" alt="" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-[#E4E4E4] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <div className="flex flex-col font-barlow text-center text-[#6D6D6D] pt-2 px-3 pb-5">
                            <span className="text-xl">Budgeting</span>
                            <span>Offering designer and customised design in the preset budget.</span>
                        </div>
                    </div>
                </div>
                <div className="group relative flex flex-col w-[27rem] bg-[#E4E4E4] rounded-xl overflow-hidden">
                    <div>
                        <img src={PIC3} className="h-[30.58rem] w-full rounded-xl p-1" alt="" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-[#E4E4E4] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <div className="flex flex-col font-barlow text-center text-[#6D6D6D] pt-2 px-3 pb-5">
                            <span className="text-xl">Certification</span>
                            <span>Whether it is hallmarking of gold, or diamond certification, we have that available.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;

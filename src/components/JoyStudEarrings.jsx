import Information from "./Information";
import PurchaseCard from "./PurchaseCard";
import Suggestions from "./Suggestions";

const JoyStudEarrings = () => {
    return (
        <div className="px-32 py-20 flex flex-col gap-10">
            <div className="uppercase flex gap-2 font-nephilm text-2xl tracking-wide">
                <span className="text-[#6D6D6D]">PRODUCTS</span>
                <span className="text-[#6D6D6D]">{">"}</span>
                <span className="text-[#6D6D6D]">EARRINGS</span>
                <span className="text-[#6D6D6D]">{">"}</span>
                <span>THE ROMANCTIC JOY STUD EARRINGS</span>
            </div>
            <div className="bg-[#F0F0F0]">
                <PurchaseCard />
            </div>
            <div className="pt-20">
                <Suggestions />
            </div>
            <div className="pt-20 px-32">
                <Information />
            </div>
        </div>
    )
};

export default JoyStudEarrings;
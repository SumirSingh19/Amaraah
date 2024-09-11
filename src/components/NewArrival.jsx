import FIG1 from "../assets/images/fig1.png";
import FIG2 from "../assets/images/fig2.png";
import FIG3 from "../assets/images/fig3.png";
import FIG4 from "../assets/images/fig4.png";
import GOLD from "../assets/images/gold.png";
import SILVER from "../assets/images/silver.png";

const NewArrival = () => {
    return (
        <div className="flex flex-col py-20 gap-10 items-center">
            <div className="text-center font-nephilm text-4xl text-[#6D6D6D]">
                <span>New Arrivals</span>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex flex-col gap-2 items-center">
                    <div>
                        <img src={FIG1} className="h-[18rem]" alt="" />
                    </div>
                    <div className="flex gap-3">
                        <img src={GOLD} alt="" />
                        <img src={SILVER} alt="" />
                    </div>
                    <div className="flex flex-col uppercase font-sans text-sm items-center">
                        <span className="font-bold">Personalised Name Necklace</span>
                        <span className="tracking-widest">18ct Gold Plate</span>
                    </div>
                    <div className="flex pt-2 gap-2 items-center font-medium">
                        <span className="text-sm">$133</span>
                        <span className="text-xs line-through">$157</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <div>
                        <img src={FIG2} className="h-[18rem]" alt="" />
                    </div>
                    <div className="flex gap-3">
                        <img src={GOLD} alt="" />
                        <img src={SILVER} alt="" />
                    </div>
                    <div className="flex flex-col uppercase font-sans text-sm items-center">
                        <span className="font-bold">Polly Sayer Knot Chain Necklace</span>
                        <span className="tracking-widest">18ct Gold Plate</span>
                    </div>
                    <div className="flex pt-2 gap-2 items-center font-medium">
                        <span className="text-sm">$133</span>
                        <span className="text-xs line-through">$157</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <div>
                        <img src={FIG3} className="h-[18rem]" alt="" />
                    </div>
                    <div className="flex gap-3">
                        <img src={GOLD} alt="" />
                        <img src={SILVER} alt="" />
                    </div>
                    <div className="flex flex-col uppercase font-sans text-sm items-center">
                        <span className="font-bold">Fine Snake Chain Necklace</span>
                        <span className="tracking-widest">18ct Gold Plate</span>
                    </div>
                    <div className="flex pt-2 gap-2 items-center font-medium">
                        <span className="text-sm">$73</span>
                        <span className="text-xs line-through">$86</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <div>
                        <img src={FIG4} className="h-[18rem]" alt="" />
                    </div>
                    <div className="flex gap-3">
                        <img src={GOLD} alt="" />
                        <img src={SILVER} alt="" />
                    </div>
                    <div className="flex flex-col uppercase font-sans text-sm items-center">
                        <span className="font-bold">Shrimps Chubby Heart Necklace</span>
                        <span className="tracking-widest">18ct Gold Plate</span>
                    </div>
                    <div className="flex pt-2 gap-2 items-center font-medium">
                        <span className="text-sm">$207</span>
                        <span className="text-xs line-through">$243</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NewArrival;
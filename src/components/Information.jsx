import INFO from "../assets/images/info.png";
import ICON1 from "../assets/images/icon1.png";
import ICON2 from "../assets/images/icon2.png";
import ICON3 from "../assets/images/icon3.png";
import ICON4 from "../assets/images/icon4.png";

const Information = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="text-3xl uppercase font-bold">
                <span>Information</span>
            </div>
            <div className="grid grid-cols-2 gap-x-60">
                <div>
                    <img src={INFO} alt="" />
                </div>
                <div className="flex flex-col gap-10">
                    <div className="uppercase font-bold">
                        <span>Amaarah&apos;s Promise</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-5 pr-20">
                        <div className="flex gap-1.5">
                            <img src={ICON1} className="w-4 h-4" alt="" />
                            <span className="uppercase text-xs font-medium">30 Day Returnable</span>
                        </div>
                        <div className="flex gap-1.5">
                            <img src={ICON2} className="w-4 h-4" alt="" />
                            <span className="uppercase text-xs font-medium">Certified Jewellery</span>
                        </div>
                        <div className="flex gap-1.5">
                            <img src={ICON3} className="w-4 h-4" alt="" />
                            <span className="uppercase text-xs font-medium">Free Shipping</span>
                        </div>
                        <div className="flex gap-1.5">
                            <img src={ICON4} className="w-4 h-4" alt="" />
                            <span className="uppercase text-xs font-medium">Buy-Back Policy</span>
                        </div>
                    </div>
                    <div className="flex flex-col text-center bg-[#87769D] text-[#F0F0F0] gap-4 px-20 w-[28rem] p-5">
                        <span className="font-semibold text-sm uppercase">Certificate of Authenticity</span>
                        <div className="text-sm font-domine font-light">
                            <span>
                                Every piece of jewellery that we
                                make is certified for authenticity by
                                third-party international laboratories
                                like SGL, IGI, BIS, GIA, and GSI.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Information;
import MAIN from "../assets/images/main-hero.png";
import RINGS from "../assets/images/rings.png";
import EARRINGS from "../assets/images/earrings.png";
import BANGLES from "../assets/images/bangles.png"; 
import NECKLACES from "../assets/images/necklaces.png";
import MEN from "../assets/images/mangalsutras.png";
import MORE from "../assets/images/chains.png";
import KIDS from "../assets/images/kids.png";
import BANNER from "../assets/images/Display-Banner.png"

const Intro = () => {
    return (
        <div className="flex flex-col">
            <div>
                <img src={MAIN} alt="" />
            </div>
            <div className="flex flex-col gap-14">
                <div className="text-center font-nephilm text-4xl text-[#6D6D6D]">
                    <span>Shop By Category</span>
                </div>
                <div className="grid grid-cols-4 px-60 gap-10 text-[#B0A8AE] text-lg"> 
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-[#f2bdc4] bg-opacity-[0.10] backdrop-brightness-110 shadow drop-shadow-md shadow-[#DDC5C8] border-[#DDC5C8] rounded-xl">
                            <img src={RINGS} className="p-8 h-[14.5rem]" alt="" />
                        </div>
                        <span>Rings</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-[#f2bdc4] bg-opacity-[0.10] backdrop-brightness-110 shadow drop-shadow-md shadow-[#DDC5C8] border-[#DDC5C8] rounded-xl">
                            <img src={EARRINGS} className="p-12 h-[14.5rem]" alt="" />
                        </div>
                        <span>Earrings</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-[#f2bdc4] bg-opacity-[0.10] backdrop-brightness-110 shadow drop-shadow-md shadow-[#DDC5C8] border-[#DDC5C8] rounded-xl">
                            <img src={BANGLES} className="h-[14.5rem] px-4" alt="" />
                        </div>
                        <span>Bracelets & Bangles</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-[#f2bdc4] bg-opacity-[0.10] backdrop-brightness-110 shadow drop-shadow-md shadow-[#DDC5C8] border-[#DDC5C8] rounded-xl">
                            <img src={NECKLACES} className="h-[14.5rem] px-4" alt="" />
                        </div>
                        <span>Necklaces</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-[#f2bdc4] bg-opacity-[0.10] backdrop-brightness-110 shadow drop-shadow-md shadow-[#DDC5C8] border-[#DDC5C8] rounded-xl">
                            <img src={MEN} className="h-[14.5rem] px-4" alt="" />
                        </div>
                        <span>Men&apos;s Jewellery</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-[#f2bdc4] bg-opacity-[0.10] backdrop-brightness-110 shadow drop-shadow-md shadow-[#DDC5C8] border-[#DDC5C8] rounded-xl">
                            <img src={NECKLACES} className="h-[14.5rem] px-4" alt="" />
                        </div>
                        <span>Necklaces</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-[#f2bdc4] bg-opacity-[0.10] backdrop-brightness-110 shadow drop-shadow-md shadow-[#DDC5C8] border-[#DDC5C8] rounded-xl">
                            <img src={MORE} className="h-[14.5rem] px-4" alt="" />
                        </div>
                        <span>More Jewellery</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-[#f2bdc4] bg-opacity-[0.10] backdrop-brightness-110 shadow drop-shadow-md shadow-[#DDC5C8] border-[#DDC5C8] rounded-xl">
                            <img src={KIDS} className="h-[14.5rem] px-4" alt="" />
                        </div>
                        <span>Gifting</span>
                    </div>
                </div>
            </div>
            <div className="py-28">
                <img src={BANNER} alt="" />
            </div>
        </div>
    )
};

export default Intro;
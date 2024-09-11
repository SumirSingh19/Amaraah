import PIN from "../assets/images/pin.png";
import P1 from "../assets/images/bm1.png";
import P2 from "../assets/images/bm2.png";
import P3 from "../assets/images/bm3.png";
import P4 from "../assets/images/bm4.png";
import P5 from "../assets/images/bm5.png";
import FIG from "../assets/images/siora.png"

const Review = () => {
    return (
        <div>
            <div className="text-center font-nephilm text-4xl text-[#6D6D6D] p-4">
                <span>Reviews</span>
            </div>
            <div className="px-10 pb-20 flex gap-20">
                <div className="flex flex-col">
                    <div className="pl-10 z-10 pb-5 rotate-[-3deg]">
                        <img src={PIN} alt="" />
                    </div>
                    <div className="bg-[#FEEEF1] w-64 rotate-[14deg] p-4 rounded-2xl">
                        <div>
                            <img src={P1} alt="" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#272B64] text-lg">Akanksha Khanna, 27</span>
                            <span className="text-[#ACACAC] text-[0.7rem]">
                                Delighted with my engagement ring from BlueStone! It&apos;s my dream ring, 
                                fits perfectly and is stunning to look at. Thanks, BlueStone, for helping us 
                                find the perfect symbol of love!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="mr-3 z-10 pt-5 rotate-[2deg]">
                        <img src={PIN} alt="" />
                    </div>
                    <div className="bg-[#FEEEF1] w-64 rotate-[-3deg] p-4 rounded-2xl">
                        <div>
                            <img src={P2} alt="" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#272B64] text-lg">Diksha Singh, 29</span>
                            <span className="text-[#ACACAC] text-[0.7rem]">
                                I was worried about finding good quality fine 
                                jewellery pieces online, but BlueStone&apos;s 
                                customer service gave me full assurance and the
                                delivery was super quick. Their jewellery is
                                certified, and there is no compromise on quality.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="pl-40 z-10 pt-3 rotate-[-10deg]">
                        <img src={PIN} alt="" />
                    </div>
                    <div className="bg-[#FEEEF1] w-64 rotate-[-10deg] p-4 rounded-2xl">
                        <div>
                            <img src={P3} alt="" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#272B64] text-lg">Nutan Mishra, 33</span>
                            <span className="text-[#ACACAC] text-[0.7rem]">
                                I got a Nazariya for my baby boy from 
                                BlueStone. It&apos;s so cute seeing it on my little one&apos;s
                                wrist, and it gives me a sense of security
                                knowing it&apos;s there. Thanks, BlueStone, for
                                making such lovely pieces for our little ones!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="pl-10 z-10 pb-2 rotate-[-5deg]">
                        <img src={PIN} alt="" />
                    </div>
                    <div className="bg-[#FEEEF1] w-64 rotate-[7deg] p-4 rounded-2xl">
                        <div>
                            <img src={P4} alt="" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#272B64] text-lg">Divya Mishra, 26</span>
                            <span className="text-[#ACACAC] text-[0.7rem]">
                                On Valentine&apos;s Day, my husband gifted me a 
                                fnecklace from BlueStone, and I haven&apos;t taken it 
                                off even once. Everyone asks me where it&apos;s from,
                                and I just LOVE how nice it looks on me.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="pl-10 z-10 pb-5 rotate-[-3deg]">
                        <img src={PIN} alt="" />
                    </div>
                    <div className="bg-[#FEEEF1] w-64 rotate-[14deg] p-4 rounded-2xl">
                        <div>
                            <img src={P5} alt="" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#272B64] text-lg">Anuska Ananya, 24</span>
                            <span className="text-[#ACACAC] text-[0.7rem]">
                                BlueStone is my go-to place for jewellery. I love 
                                that I can wear their jewellery to work, dates, 
                                parties and brunches; it goes with everything
                                and makes my outfits look stylish and trendy.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-80 bg-[#E1E1E1]">
                <img src={FIG} alt="" />
            </div>
        </div>
    )
};

export default Review;
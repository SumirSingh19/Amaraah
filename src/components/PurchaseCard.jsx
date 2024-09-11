import EARRING from "../assets/images/container.png";
import VIDEO from "../assets/images/video-thumb.png"; // Assuming you have a video image icon
import PHOTO1 from "../assets/images/border.png";
import PHOTO2 from "../assets/images/link1.png";
import PHOTO3 from "../assets/images/link2.png";
import IMG1 from "../assets/images/image1.png";
import IMG2 from "../assets/images/image2.png";
import IMG3 from "../assets/images/image3.png";
import IMG4 from "../assets/images/certified.png";

const images = [
    { id: 1, src: EARRING, alt: "Earrings Front" },
    { id: 2, src: VIDEO, alt: "Video Thumbnail" }, // Example video thumbnail
    { id: 3, src: PHOTO1, alt: "Earrings Model" }, // Dummy model image
    { id: 4, src: PHOTO2, alt: "Earrings Side" },  // Different angles of earrings
    { id: 5, src: PHOTO3, alt: "Earrings Back" }
];

const PurchaseCard = () => {
    return (
        <div className="flex flex-col py-10">
            <div className="flex items-center">
                <div className="pt-8 px-40">
                    <div>
                        <img src={EARRING} className="w-[30rem]" alt="Earrings" />
                    </div>
                    {/* Carousel Section */}
                    <div className="flex items-center justify-between mt-2">
                        <button className="text-2xl px-2">{"<"}</button> {/* Left arrow */}
                        <div className="flex gap-2 overflow-x-scroll">
                            {images.map((image) => (
                                <div key={image.id} className="w-[80px] h-[80px] border border-gray-300 flex items-center justify-center">
                                    <img src={image.src} alt={image.alt} className="w-[20rem]" />
                                </div>
                            ))}
                        </div>
                        <button className="text-2xl px-2">{">"}</button> {/* Right arrow */}
                    </div>
                </div>

                {/* Product details */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <div className="font-domine text-2xl">
                            <span>The Romantic Joy Stud Earrings</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-domine"> 
                                <span className="text-[#666666] line-through text-lg">Rs.1,19,018</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex gap-10 items-center">
                                    <span className="font-domine text-2xl">Rs.1,13,067</span>
                                    <div className="ribbon-shape font-semibold text-sm">flat 5% off</div> {/* Banner */}
                                </div>
                                <div>
                                    <span className="text-sm">MRP Inc. of all taxes</span>                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pincode Section */}
                    <div className="bg-[#ffffff] text-[#4D4D4D] px-5 py-3 rounded-md w-3/4">
                        <div className="flex px-1 py-2 text-[#4D4D4D]">
                            <div className="pr-2">
                                <span>Your Pincode</span>
                            </div>
                            <div className="p-[1px] bg-[#5A5A5A]">
                                <input
                                    type="text"
                                    className="placeholder:text-[#757575] placeholder:text-[0.8rem] placeholder:font-helvetica placeholder:p-1"
                                    placeholder="Pincode"
                                />
                            </div>
                            <div className="bg-[#5A5A5A] text-[#FFFFFF]">
                                <button className="text-xs px-3 font-helvetica">Send</button>
                            </div>
                        </div>
                        <div>
                            <span className="text-base">Provide pincode for availability of home delivery.</span>
                        </div>
                    </div>

                    {/* Product description */}
                    <div className="w-3/4 text-[#666666] text-sm">
                        <span>Diamond PreSet Solitaire Earrings In 18Kt White Gold (2.04 gram) with
                        Diamonds (0.1600 Ct) and Solitaire (0.60 Ct)</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                        <button className="bg-[#652267] text-[#ffffff] p-1 px-16">Buy Now</button>
                        <button className="text-[#652267] border border-[#652267] p-0.5 px-8">10+1 Monthly Plan</button>
                    </div>
                    <div className="flex gap-2 border border-[#D3D3D3] border-r-0 border-l-0 w-4/5 p-1 mt-8">
                        <div className="border-r-2 px-2 border-[#D3D3D3] flex flex-col items-center">
                            <img src={IMG1} className="w-[1rem]" alt="" />
                            <span className="text-[#337AB7] text-sm">30 Day Returnable</span>
                        </div>
                        <div className="border-r-2 px-2 border-[#D3D3D3] flex flex-col items-center">
                            <img src={IMG2} className="w-[1rem]" alt="" />
                            <span className="text-[#337AB7] text-sm">Lifetime Exchange & Buy-Back</span>
                        </div>
                        <div className="pl-2 flex flex-col items-center">
                            <img src={IMG3} className="w-[1rem]" alt="" />
                            <span className="text-[#337AB7] text-sm">Certified Jewellery</span>
                        </div>
                    </div>
                    <div className="flex text-sm pl-10">
                        <span>Any Questions? Please feel free to reach us at:</span>
                        <span className="font-bold">+91 97533 06792</span>
                    </div>
                </div>
            </div>
            <div className="pl-32">
                <img src={IMG4} className="w-[35rem]" alt="" />
            </div>
        </div>
    );
};

export default PurchaseCard;

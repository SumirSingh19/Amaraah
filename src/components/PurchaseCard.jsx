import PropTypes from 'prop-types';

const PurchaseCard = ({ product }) => {
    if (!product) return null;

    return (
        <div className="flex flex-col py-10">
            <div className="flex items-center">
                <div className="pt-8 px-40">
                    <div>
                        <img src={product.image} className="w-[30rem]" alt={product.title} />
                    </div>
                    {/* Carousel Section */}
                    <div className="flex items-center justify-between mt-2">
                        <button className="text-2xl px-2">{"<"}</button>
                        <div className="flex gap-2 overflow-x-scroll">
                            {/* Assuming the product has an array of images */}
                            {product.images?.map((img, index) => (
                                <div key={index} className="w-[80px] h-[80px] border border-gray-300 flex items-center justify-center">
                                    <img src={img.src} alt={img.alt} className="w-[20rem]" />
                                </div>
                            ))}
                        </div>
                        <button className="text-2xl px-2">{">"}</button>
                    </div>
                </div>

                {/* Product details */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <div className="font-domine text-2xl">
                            <span>{product.title}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-domine">
                                <span className="text-[#666666] line-through text-lg">{product.originalPrice}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex gap-10 items-center">
                                    <span className="font-domine text-2xl">{product.salePrice}</span>
                                    <div className="ribbon-shape font-semibold text-sm">{product.discount || "5% off"}</div>
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
                        <span>{product.description}</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                        <button className="bg-[#652267] text-[#ffffff] p-1 px-16">Buy Now</button>
                        <button className="text-[#652267] border border-[#652267] p-0.5 px-8">10+1 Monthly Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

PurchaseCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        originalPrice: PropTypes.string,
        salePrice: PropTypes.string,
        discount: PropTypes.string,
        description: PropTypes.string,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string,
                alt: PropTypes.string
            })
        )
    })
};

export default PurchaseCard;

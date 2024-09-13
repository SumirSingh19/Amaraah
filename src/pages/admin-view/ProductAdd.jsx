import { useState } from "react";
import I1 from "../../assets/images/1.png";
import I2 from "../../assets/images/2.png";
import I3 from "../../assets/images/3.png";
import I4 from "../../assets/images/4.png";
import I5 from "../../assets/images/5.png";

const ProductAdd = () => {

    const [inputValue, setInputValue] = useState('');

    const [images, setImages] = useState([null, null, null,null,null]);

    const handleImageChange = (e, index) => {
        const files = e.target.files;
        if (files && files[0]) {
            const updatedImages = [...images];
            updatedImages[index] = URL.createObjectURL(files[0]);
            setImages(updatedImages);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="font-inter text-2xl font-semibold">
                <span>Add New Product</span>
            </div>
            <div className="bg-[#FFFFFF] flex flex-col gap-10 border shadow shadow-[#c0bdbd] p-9">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2 items-center">
                        <img src={I1} className="w-6" alt="" />
                        <span className="text-xl font-semibold">Name</span>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1">
                            <span className="font-inter text-[#8E95A9] text-sm">Product Title</span>
                            <input 
                                type="text" 
                                placeholder="ex. LOTR rings" 
                                className="border-2 border-[#CDD1DE] p-2 w-72 rounded-sm focus:outline-none focus:border-[#666] focus:ring-0 focus:ring-[#666] placeholder:font-inter placeholder:text-[#1C2A53] placeholder:text-sm" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-inter text-[#8E95A9] text-sm">Product Category</span>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Ex. Gold, Silver, etc" 
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="border-2 border-[#CDD1DE] p-2 w-96 rounded-sm focus:outline-none focus:border-[#666] focus:ring-0 focus:ring-[#666] placeholder:text-[#1C2A53] placeholder:font-inter placeholder:text-sm" 
                                />
                                {inputValue === '' && (
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8E95A9] text-sm">
                                        +3 more
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2 items-center">
                        <img src={I2} className="w-6" alt="" />
                        <span className="text-xl font-semibold">Specifications</span>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1">
                            <span className="font-inter text-[#8E95A9] text-sm">Karats</span>
                            <input 
                                type="text" 
                                placeholder="5000" 
                                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm focus:outline-none focus:border-[#666] focus:ring-0 focus:ring-[#666] placeholder:font-inter placeholder:text-[#1C2A53] placeholder:text-sm" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-inter text-[#8E95A9] text-sm">Weight</span>
                            <input 
                                type="text" 
                                placeholder="5.2 gm" 
                                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm focus:outline-none focus:border-[#666] focus:ring-0 focus:ring-[#666] placeholder:font-inter placeholder:text-[#1C2A53] placeholder:text-sm" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-inter text-[#8E95A9] text-sm">Gross Weight</span>
                            <input 
                                type="text" 
                                placeholder="12.2 gm" 
                                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm focus:outline-none focus:border-[#666] focus:ring-0 focus:ring-[#666] placeholder:font-inter placeholder:text-[#1C2A53] placeholder:text-sm" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-inter text-[#8E95A9] text-sm">Dia Weight</span>
                            <input 
                                type="text" 
                                placeholder="0.5" 
                                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm focus:outline-none focus:border-[#666] focus:ring-0 focus:ring-[#666] placeholder:font-inter placeholder:text-[#1C2A53] placeholder:text-sm" 
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2 items-center">
                        <img src={I3} className="w-6" alt="" />
                        <span className="text-xl font-semibold">Add Description</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-inter text-[#8E95A9] text-sm">Description</span>
                        <textarea 
                            placeholder="description..." 
                            className="border-2 border-[#CDD1DE] p-2 w-[80rem] h-[15rem] text-start rounded-sm focus:outline-none focus:border-[#666] focus:ring-0 focus:ring-[#666] placeholder:font-inter placeholder:text-[#1C2A53] placeholder:text-sm"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2 items-center">
                        <img src={I4} className="w-6" alt="" />
                        <span className="text-xl font-semibold">Add Images</span>
                    </div>
                    <div className="flex gap-5">
                        {images.map((image, index) => (
                            <div key={index} className="w-40 h-40 bg-[#E5E5E5] flex items-center justify-center rounded-md relative">
                                {image ? (
                                    <img src={image} alt="uploaded" className="w-full h-full object-cover rounded-md" />
                                ) : (
                                    <button
                                        onClick={() => document.getElementById(`file-input-${index}`).click()}
                                        className="bg-gray-400 w-10 h-10 flex items-center justify-center rounded-full"
                                    >
                                        <span className="text-white text-2xl">+</span>
                                    </button>
                                )}
                                <input
                                    id={`file-input-${index}`}
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, index)}
                                    className="hidden"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2 items-center">
                        <img src={I5} className="w-6" alt="" />
                        <span className="text-xl font-semibold">Add Details</span>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1">
                            <span className="font-inter text-[#8E95A9] text-sm">Price</span>
                            <input 
                                type="text" 
                                placeholder="10500" 
                                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm focus:outline-none focus:border-[#666] focus:ring-0 focus:ring-[#666] placeholder:font-inter placeholder:text-[#1C2A53] placeholder:text-sm" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-inter text-[#8E95A9] text-sm">Labour Cost</span>
                            <input 
                                type="text" 
                                placeholder="2000" 
                                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm focus:outline-none focus:border-[#666] focus:ring-0 focus:ring-[#666] placeholder:font-inter placeholder:text-[#1C2A53] placeholder:text-sm" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-inter text-[#8E95A9] text-sm">Total Stock</span>
                            <input 
                                type="text" 
                                placeholder="105" 
                                className="border-2 border-[#CDD1DE] p-2 w-60 rounded-sm focus:outline-none focus:border-[#666] focus:ring-0 focus:ring-[#666] placeholder:font-inter placeholder:text-[#1C2A53] placeholder:text-sm" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductAdd;
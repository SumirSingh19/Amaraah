import { useState } from "react";
import RING from "../assets/images/ringPic.png";
import { FaHeart } from 'react-icons/fa';  // Import FontAwesome heart icon

const Rings = () => {
    const [liked, setLiked] = useState(false);  // Manage the liked state

    const toggleLike = () => {
        setLiked(!liked);  // Toggle the liked state on click
    };

    return (
        <div className="px-40 py-20 flex flex-col gap-16">
            <div className="uppercase flex gap-2 font-nephilm text-2xl tracking-wide">
                <span className="text-[#6D6D6D]">Products</span>
                <span className="text-[#6D6D6D]">{">"}</span>
                <span className="text-[#000000]">Rings</span>
            </div>
            <div className="grid grid-cols-3 px-10 gap-y-20">
                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>


                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-[20rem] relative">
                    <div className="relative">
                        <img src={RING} className="" alt="Ring" />
                        {/* Like Button (Heart) */}
                        <div className="absolute top-2 left-2">
                            <FaHeart 
                                onClick={toggleLike}
                                size={24} 
                                className={`cursor-pointer transition-colors 
                                ${liked ? 'text-red-600' : 'text-transparent'} 
                                ${liked ? '' : 'stroke-black stroke-2'} 
                                hover:text-red-400`}
                                style={{ stroke: liked ? 'none' : 'black', strokeWidth: liked ? '0' : '10' }} // Adds black outline
                            />
                        </div>
                    </div>
                    <div className="text-[#757575] text-sm">
                        <span>The Jenelle Ring</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="text-[#000000] font-semibold text-xl">RS. 54,374</span>
                            <div className="flex gap-1 items-end text-[#9E9E9E]">
                                <span className="text-[0.5rem] pb-1">RS.</span>
                                <span className="line-through">57,236</span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <span className="font-semibold">Save</span>
                            <span className="font-bold text-[#652267]">Rs.2,862</span>
                        </div>
                    </div>
                    <div className="text-center w-full bg-[#652267] mt-2">
                        <span className="text-[#FFFFFF]">5% OFF</span>
                    </div>
                </div>
                
            </div>
            <div className="text-center pr-20">
                <button className="uppercase text-[#FFFFFF] bg-[#1E1E1E] px-10 py-2 text-xs rounded-full">Load More</button>
            </div>
        </div>
    );
};

export default Rings;

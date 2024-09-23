import { useState, useEffect } from "react";
import { FaHeart } from 'react-icons/fa';

const Rings = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [liked, setLiked] = useState({});

    const toggleLike = (id) => {
        setLiked(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_NODE_BASE_URL}/api/v1/admin/products/get?search=Rings&page=${page}&limit=10`);
                const data = await response.json();
                if (data.success) {
                    console.log(data.data.products);
                    setProducts(data.data.products);
                } else {
                    console.error("Error fetching products:", data.message);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [page]);

    const loadMoreProducts = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="px-40 py-20 flex flex-col gap-16">
            <div className="uppercase flex gap-2 font-nephilm text-2xl tracking-wide">
                <span className="text-[#6D6D6D]">Products</span>
                <span className="text-[#6D6D6D]">{">"}</span>
                <span className="text-[#000000]">Rings</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {products.map(product => (
                    <div key={product._id} className="flex flex-col gap-2 w-[20rem] relative border p-4 rounded-lg shadow-lg">
                        <div className="relative">
                            <img src={product.image} className="w-full h-40 object-cover mb-4" alt={product.title} />
                            {/* Like Button (Heart) */}
                            <div className="absolute top-2 left-2">
                                <FaHeart
                                    onClick={() => toggleLike(product._id)}
                                    size={24}
                                    className={`cursor-pointer transition-colors 
                  ${liked[product._id] ? 'text-red-600' : 'text-transparent'} 
                  ${liked[product._id] ? '' : 'stroke-black stroke-2'} 
                  hover:text-red-400`}
                                    style={{ stroke: liked[product._id] ? 'none' : 'black', strokeWidth: liked[product._id] ? '0' : '10' }}
                                />
                            </div>
                        </div>
                        <div className="text-[#757575] text-sm">
                            <span>{product.title}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                                <span className="text-[#000000] font-semibold text-xl">RS. {product.salePrice || product.price}</span>
                                {product.salePrice && (
                                    <div className="flex gap-1 items-end text-[#9E9E9E]">
                                        <span className="text-[0.5rem] pb-1">RS.</span>
                                        <span className="line-through">{product.price}</span>
                                    </div>
                                )}
                            </div>
                            {product.salePrice && (
                                <div className="flex gap-2 text-sm">
                                    <span className="font-semibold">Save</span>
                                    <span className="font-bold text-[#652267]">
                                        Rs.{(product.price - product.salePrice).toFixed(0)}
                                    </span>
                                </div>
                            )}
                        </div>
                        {product.salePrice && (
                            <div className="text-center w-full bg-[#652267] mt-2">
                                <span className="text-[#FFFFFF]">5% OFF</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="text-center pr-20">
                <button
                    className="uppercase text-[#FFFFFF] bg-[#1E1E1E] px-10 py-2 text-xs rounded-full"
                    onClick={loadMoreProducts}
                >
                    Load More
                </button>
            </div>
        </div>
    );
};

export default Rings;

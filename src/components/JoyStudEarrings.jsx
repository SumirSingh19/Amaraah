import { useEffect, useState } from 'react';
import Information from "./Information";
import PurchaseCard from "./PurchaseCard";
import Suggestions from "./Suggestions";

const JoyStudEarrings = () => {
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_NODE_BASE_URL}/api/v1/admin/products/get?search=EarRings&page=1&limit=10`);
                const data = await response.json();

                if (data && Array.isArray(data.products) && data.products.length > 0) {
                    const rawProduct = data.products[0];
                    
                    const mappedProduct = {
                        title: rawProduct.title,
                        image: rawProduct.images[0],
                        images: rawProduct.images.map(img => ({ src: img, alt: rawProduct.title })),
                        originalPrice: `₹${rawProduct.originalPrice}`,
                        salePrice: `₹${rawProduct.salePrice}`,
                        discount: `${rawProduct.discount}% off`,
                        description: rawProduct.description,
                    };

                    setProductData(mappedProduct);
                } else {
                    console.error("No products found or invalid response structure");
                    setProductData(null);
                }
            } catch (error) {
                console.error("Error fetching product data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!productData) {
        return <div>No product data available.</div>;
    }

    return (
        <div className="px-32 py-20 flex flex-col gap-10">
            <div className="uppercase flex gap-2 font-nephilm text-2xl tracking-wide">
                <span className="text-[#6D6D6D]">PRODUCTS</span>
                <span className="text-[#6D6D6D]">{">"}</span>
                <span className="text-[#6D6D6D]">EARRINGS</span>
                <span className="text-[#6D6D6D]">{">"}</span>
                <span>{productData.title.toUpperCase()}</span>
            </div>
            <div className="bg-[#F0F0F0]">
                <PurchaseCard product={productData} />
            </div>
            <div className="pt-20">
                <Suggestions relatedProducts={productData.related} />
            </div>
            <div className="pt-20 px-32">
                <Information product={productData} />
            </div>
        </div>
    );
};

export default JoyStudEarrings;
const Wishlist = () => {
    const wishlistItems = [
        { name: "Product 1", price: "$50.00" },
        { name: "Product 2", price: "$100.00" },
    ];

    return (
        <div>
            <h2 className="font-semibold text-2xl mb-6">Wishlist</h2>
            <div className="space-y-4">
                {wishlistItems.map((item, index) => (
                    <div key={index} className="flex justify-between bg-white p-4 rounded-lg shadow">
                        <h3 className="text-[#1C2A53]">{item.name}</h3>
                        <span className="text-[#1C2A53]">{item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;

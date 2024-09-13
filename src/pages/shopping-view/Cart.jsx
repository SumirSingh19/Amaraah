const cartItems = [
    { id: 1, name: "Product 1", price: "$15.00", quantity: 2 },
    { id: 2, name: "Product 2", price: "$25.00", quantity: 1 },
    // Add more items
];

const Cart = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">My Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4 mb-4">
                    <div className="flex gap-4">
                        <div>
                            <h4 className="text-lg">{item.name}</h4>
                            <p className="text-sm text-[#8E95A9]">Quantity: {item.quantity}</p>
                            <p className="text-lg">{item.price}</p>
                        </div>
                    </div>
                    <button className="bg-red-500 text-white p-2 rounded hover:bg-red-700">Remove</button>
                </div>
            ))}
            <button className="bg-[#652267] text-white p-2 rounded hover:bg-[#8B3A81]">Checkout</button>
        </div>
    );
};

export default Cart;

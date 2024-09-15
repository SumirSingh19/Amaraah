import { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch cart items when component loads
    useEffect(() => {
        const fetchCartItems = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${import.meta.env.VITE_NODE_BASE_URL}/api/v1/shop/cart/get/66dd5affa688832768ae834d`);
                setCartItems(res.data.cartItems);
            } catch (err) {
                setError("Failed to fetch cart items");
            } finally {
                setLoading(false);
            }
        };
        fetchCartItems();
    }, []);

    const handleRemove = async (itemId) => {
        try {
            await axios.delete(`${import.meta.env.VITE_NODE_BASE_URL}/api/v1/shop/cart/66dd5affa688832768ae834d/${itemId}`);
            setCartItems(cartItems.filter(item => item.id !== itemId));
        } catch (err) {
            setError('Failed to remove item');
        }
    };

    const handleUpdateQuantity = async (itemId, quantity) => {
        try {
            const res = await axios.put(`${import.meta.env.VITE_NODE_BASE_URL}/api/v1/shop/cart/update-cart`, { id: itemId, quantity });
            setCartItems(cartItems.map(item => item.id === itemId ? { ...item, quantity: res.data.quantity } : item));
        } catch (err) {
            setError('Failed to update quantity');
        }
    };

    const handleCheckout = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_NODE_BASE_URL}/api/v1/shop/cart/checkout`, { cartItems });
            alert('Checkout successful!');
        } catch (err) {
            setError('Checkout failed');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-6 bg-[#F4EAAD] rounded-lg shadow-lg text-[#652267] font-abeezee">
            <h2 className="text-3xl font-bold mb-6 text-center">My Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center text-lg">Your cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b border-[#823084] pb-4 mb-4">
                        <div className="flex gap-4">
                            <div>
                                <h4 className="text-xl font-bold">{item.name}</h4>
                                <p className="text-sm text-[#8E95A9]">Quantity: {item.quantity}</p>
                                <p className="text-lg">{item.price}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button 
                                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </button>
                            <button 
                                className="bg-[#652267] text-white px-3 py-2 rounded-full hover:bg-[#823084] transition"
                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </button>
                            <button 
                                className={`bg-[#652267] text-white px-3 py-2 rounded-full hover:bg-[#823084] transition ${item.quantity <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                            >
                                -
                            </button>
                        </div>
                    </div>
                ))
            )}
            <div className="flex justify-center mt-6">
                <button 
                    className="bg-[#652267] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#823084] transition"
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;

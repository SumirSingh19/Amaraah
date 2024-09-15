import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [orders, setOrders] = useState([]); // Ensure it's initialized as an empty array
    const [newOrder, setNewOrder] = useState({
        userId: '',
        cartItems: [],
        addressInfo: '',
        orderStatus: 'Pending',
        paymentMethod: '',
        paymentStatus: '',
        totalAmount: '',
        orderDate: '',
        orderUpdateDate: '',
        paymentId: '',
        payerId: '',
        cartId: '',
    });

    useEffect(() => {
        // Fetch existing orders
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_NODE_BASE_URL}/api/v1/shop/orders`);
                if (Array.isArray(response.data)) {
                    setOrders(response.data); // Ensure the response is an array
                } else {
                    setOrders([]); // Fallback to an empty array if response is not an array
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
                setOrders([]); // Set empty array in case of error
            }
        };

        fetchOrders();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewOrder((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddOrder = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_NODE_BASE_URL}/api/v1/shop/order/create`, newOrder);
            setOrders((prevOrders) => [...prevOrders, response.data]); // Add the new order to the list
        } catch (error) {
            console.error('Error adding order:', error);
        }
    };

    return (
        <div className="p-5">
            <h2 className="font-semibold text-2xl mb-6">Dashboard</h2>

            {/* Order Form */}
            <form onSubmit={handleAddOrder} className="mb-6">
                <input
                    type="text"
                    name="userId"
                    value={newOrder.userId}
                    onChange={handleChange}
                    placeholder="User ID"
                    className="border p-2 mb-2"
                />
                {/* Add other fields for order details similarly */}
                <button type="submit" className="bg-[#652267] text-white p-2 rounded">
                    Add Order
                </button>
            </form>

            {/* Latest Orders */}
            <h2 className="font-semibold text-2xl mb-6">Latest Orders</h2>
            {Array.isArray(orders) && orders.length > 0 ? (
                <table className="min-w-full table-auto border-separate border-spacing-y-2">
                    <thead>
                        <tr className="bg-gray-100 text-[#8E95A9] font-normal text-sm">
                            <th className="p-4">Order ID</th>
                            <th className="p-4">Customer</th>
                            <th className="p-4">Qty</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Revenue</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.orderId} className="bg-white rounded-lg shadow">
                                <td className="p-4">{order.orderId}</td>
                                <td className="p-4">{order.customer}</td>
                                <td className="p-4">{order.products}</td>
                                <td className="p-4">{order.date}</td>
                                <td className="p-4">{order.revenue}</td>
                                <td className="p-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-sm ${
                                            order.status === 'Delivered'
                                                ? 'bg-green-500 text-white'
                                                : order.status === 'Shipped'
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-red-500 text-white'
                                        }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No orders found.</p> // Show message if no orders are available
            )}
        </div>
    );
};

export default Dashboard;

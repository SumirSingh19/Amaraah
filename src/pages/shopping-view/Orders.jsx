import { useState } from 'react';
import axios from 'axios';

const initialOrders = [
    {
        orderId: "#53200012",
        products: 2,
        date: "Mar 10, 2021",
        revenue: "$253.82",
        status: "Delivered",
    },
    // Add more orders as needed
];

const OrderHistory = () => {
    const [orderData, setOrderData] = useState(initialOrders);

    const handlePlaceOrder = async (newOrder) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_NODE_BASE_URL}/api/v1/shop/order/create`, newOrder);
            setOrderData((prevOrders) => [...prevOrders, response.data]);
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    // Example new order
    const exampleOrder = {
        orderId: "#53200013",
        products: 1,
        date: "Sep 15, 2024",
        revenue: "$123.45",
        status: "Pending",
    };

    return (
        <div className="p-6 bg-[#F4EAAD] rounded-lg shadow-lg text-[#652267] font-abeezee">
            <h2 className="text-3xl font-bold text-center mb-6">Order History</h2>
            <table className="min-w-full table-auto border-separate border-spacing-y-2">
                <thead className="text-left">
                    <tr className="bg-[#823084] text-white text-sm">
                        <th className="p-4">Order ID</th>
                        <th className="p-4">Products</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Total Amount</th>
                        <th className="p-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map((order, index) => (
                        <tr key={index} className="bg-white rounded-lg shadow">
                            <td className="p-4 text-[#555F7E]">{order.orderId}</td>
                            <td className="p-4 text-[#555F7E]">{order.products}</td>
                            <td className="p-4 text-[#555F7E] font-semibold">{order.date}</td>
                            <td className="p-4 text-[#555F7E] font-semibold">{order.revenue}</td>
                            <td className="p-4">
                                <span className={`px-2 py-1 rounded-full text-sm ${order.status === "Delivered" ? "bg-[#219653] text-white" : order.status === "Shipped" ? "bg-[#F2994A] text-white" : "bg-[#FF392B] text-white"}`}>
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button 
                className="bg-[#652267] text-white p-2 rounded hover:bg-[#8B3A81]" 
                onClick={() => handlePlaceOrder(exampleOrder)}
            >
                Place Order
            </button>
        </div>
    );
};

export default OrderHistory;

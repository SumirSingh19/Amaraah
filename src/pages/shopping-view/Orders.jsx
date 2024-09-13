const orders = [
    {
        orderId: "#53200012",
        products: 2,
        date: "Mar 10, 2021",
        revenue: "$253.82",
        status: "Delivered",
    },
    {
        orderId: "#53200013",
        products: 5,
        date: "Sep 4, 2021",
        revenue: "$556.24",
        status: "Shipped",
    },
    {
        orderId: "#53200014",
        products: 3,
        date: "Oct 1, 2021",
        revenue: "$115.26",
        status: "Processing",
    },
];

const OrderHistory = () => {
    return (
        <div className="p-5">
            <h2 className="font-semibold text-2xl mb-6">Order History</h2>
            <table className="min-w-full table-auto border-separate border-spacing-y-2">
                <thead className="text-left">
                    <tr className="bg-gray-100 text-[#8E95A9] font-normal text-sm">
                        <th className="p-4">Order ID</th>
                        <th className="p-4">Products</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Total Amount</th>
                        <th className="p-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="bg-white rounded-lg shadow">
                            <td className="p-4 text-[#555F7E]">{order.orderId}</td>
                            <td className="p-4 text-[#555F7E]">{order.products}</td>
                            <td className="p-4 text-[#555F7E] font-semibold">{order.date}</td>
                            <td className="p-4 text-[#555F7E] font-semibold">{order.revenue}</td>
                            <td className="p-4">
                                <span className={`px-2 py-1 rounded-full text-sm ${order.status === "Delivered" ? "text-[#219653]" : order.status === "Shipped" ? "text-[#F2994A]" : "text-[#FF392B]"}`}>
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;

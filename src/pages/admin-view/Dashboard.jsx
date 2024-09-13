import { PencilIcon, TrashIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'; // Updated v2 imports

const orders = [
    {
        orderId: "#53200002",
        products: 8,
        date: "Jan 10, 2020",
        customer: "Ronald Jones",
        customerImage: "https://via.placeholder.com/32", // Example image URL
        revenue: "$253.82",
        netProfit: "$60.76",
        status: "Pending",
    },
    {
        orderId: "#53200003",
        products: 5,
        date: "Sep 4, 2020",
        customer: "Jacob Mckinney",
        customerImage: "https://via.placeholder.com/32", // Example image URL
        revenue: "$556.24",
        netProfit: "$66.41",
        status: "Shipping",
    },
    {
        orderId: "#53200004",
        products: 7,
        date: "Aug 30, 2020",
        customer: "Randall Murphy",
        customerImage: "https://via.placeholder.com/32", // Example image URL
        revenue: "$115.26",
        netProfit: "$95.66",
        status: "Refund",
    },
    // Add more orders as needed
];

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-8">
                <div className="font-inter text-2xl font-semibold">
                    <span>Dashboard</span>
                </div>
                <div className="flex gap-16">
                    <div className="bg-[#FFFFFF] flex flex-col font-inter items-start p-4 px-20 rounded-md">
                        <span className="text-[#8E95A9] text-sm">Total Revenue</span>
                        <span className="text-[#1C2A53] text-2xl font-semibold">$75,620</span>
                    </div>
                    <div className="bg-[#FFFFFF] flex flex-col font-inter items-start p-4 px-20 rounded-md">
                        <span className="text-[#8E95A9] text-sm">Orders Fullfilled</span>
                        <span className="text-[#1C2A53] text-2xl font-semibold">12</span>
                    </div>
                    <div className="bg-[#FFFFFF] flex flex-col font-inter items-start p-4 px-20 rounded-md">
                        <span className="text-[#8E95A9] text-sm">Order Pending</span>
                        <span className="text-[#1C2A53] text-2xl font-semibold">7</span>
                    </div>
                    <div className="bg-[#FFFFFF] flex flex-col font-inter items-start p-4 px-28 rounded-md">
                        <span className="text-[#8E95A9] text-sm">Net Profit</span>
                        <span className="text-[#1C2A53] text-2xl font-semibold">28%</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="font-inter text-xl font-semibold mb-6">Latest Orders</h2>
                <table className="min-w-full table-auto border-separate border-spacing-y-2">
                    <thead className="text-left">
                        <tr className="bg-gray-100 text-[#8E95A9] font-normal text-sm">
                            <th className="p-4">Order ID</th>
                            <th className="p-3">Customer</th>
                            <th className="p-3">Qty</th>
                            <th className="p-4">Date</th>
                            
                            <th className="p-4 pr-5">Revenue</th>
                            <th className="p-4">Net Profit</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="bg-white rounded-lg shadow font-inter">
                                <td className="p-4 text-[#555F7E] text-sm">{order.orderId}</td>
                                <td className="p-4 text-[#555F7E] text-sm flex items-center gap-2">
                                    {/* Add customer image */}
                                    <img
                                        src={order.customerImage}
                                        alt={order.customer}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span>{order.customer}</span>
                                </td>
                                <td className="p-4 text-[#555F7E] text-sm">{order.products}</td>
                                <td className="p-4 text-[#555F7E] font-semibold text-sm">{order.date}</td>                                
                                <td className="p-4 text-[#555F7E] font-semibold text-sm">{order.revenue}</td>
                                <td className="p-4 text-[#555F7E] font-semibold text-sm">{order.netProfit}</td>
                                <td className="p-4 text-[#555F7E] font-semibold">
                                    <span className={`px-2 py-1 rounded-full text-sm ${order.status === "Completed" ? "text-[#219653]" : order.status === "Refund" ? "text-[#F2994A]" : order.status === "Pending" ? "text-[#FF392B]" : "text-[#2B2B4C]"}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4 flex gap-2">
                                    <button className="text-[#C8CAD8] hover:text-gray-500">
                                        <PencilIcon className="h-5 w-5" />
                                    </button>
                                    <button className="text-[#C8CAD8] hover:text-gray-500">
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                    <button className="text-[#C8CAD8] hover:text-gray-500">
                                        <EllipsisHorizontalIcon className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;

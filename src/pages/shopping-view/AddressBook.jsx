const addresses = [
    { id: 1, address: "123 Main St, City, Country", phone: "123-456-7890" },
    { id: 2, address: "456 Market St, City, Country", phone: "987-654-3210" },
    // Add more addresses as needed
];

const AddressBook = () => (
    <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Address Book</h2>
        {addresses.map((addr) => (
            <div key={addr.id} className="flex justify-between items-center border-b pb-4 mb-4">
                <div>
                    <h4 className="text-lg">{addr.address}</h4>
                    <p className="text-sm text-[#8E95A9]">Phone: {addr.phone}</p>
                </div>
                <button className="bg-red-500 text-white p-2 rounded hover:bg-red-700">Remove</button>
            </div>
        ))}
        <button className="bg-[#652267] text-white p-2 rounded hover:bg-[#8B3A81]">Add New Address</button>
    </div>
);

export default AddressBook;

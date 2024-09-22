import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAuth } from '@/components/useAuth';

const AddressBook = () => {
    const { user } = useAuth();
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState({
        address: '',
        phone: ''
    });
    const [error, setError] = useState('');

    const fetchAddresses = useCallback(async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_NODE_BASE_URL}/api/v1/user/address/get/${user._id}`); // Adjust the userId dynamically
            setAddresses(response.data.data);
        } catch (err) {
            console.error('Error fetching addresses:', err);
        }
    }, [user._id]);

    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses]);

    // Handle input change for new address
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle add new address
    const handleAddAddress = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/user/address/add', newAddress);
            setAddresses((prev) => [...prev, response.data]);
            setNewAddress({ address: '', phone: '' });
        } catch (err) {
            setError('Error adding address.');
            console.error(err);
        }
    };

    // Handle address removal
    const handleRemoveAddress = async (id) => {
        try {
            await axios.delete(`/api/v1/user/address/delete/${id}`);
            setAddresses((prev) => prev.filter((address) => address.id !== id));
        } catch (err) {
            console.error('Error removing address:', err);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-[#652267]">Address Book</h2>

            {/* Display existing addresses */}
            {addresses.map((addr) => (
                <div key={addr.id} className="flex justify-between items-center border-b pb-4 mb-4">
                    <div>
                        <h4 className="text-lg font-semibold text-[#555F7E]">{addr.address}</h4>
                        <p className="text-sm text-[#8E95A9]">Phone: {addr.phone}</p>
                    </div>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                        onClick={() => handleRemoveAddress(addr.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}

            {/* Add new address form */}
            <form onSubmit={handleAddAddress} className="mt-4">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-[#652267]" htmlFor="address">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={newAddress.address}
                        onChange={handleChange}
                        className="w-full p-3 border border-[#652267] rounded focus:outline-none focus:border-[#823084]"
                        placeholder="Enter new address"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-[#652267]" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={newAddress.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-[#652267] rounded focus:outline-none focus:border-[#823084]"
                        placeholder="Enter phone number"
                    />
                </div>
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#652267] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#823084] transition"
                    >
                        Add New Address
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddressBook;

import ProductAdd from "./ProductAdd";
import Sidebar from "./Sidebar";

const AdminPanel = () => {
    return (
        <div className="flex gap-20 bg-[#F8F8F8]">
            <div>
                <Sidebar />
            </div>
            <div className="p-5 py-16">
                <ProductAdd />
            </div>
        </div>
    )

}

export default AdminPanel;
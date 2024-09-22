import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/AboutPage";
import Contact from "./components/Contact";
import GoldPrices from "./components/GoldPrices";
import Rings from "./components/Rings";
import JoyStudEarrings from "./components/JoyStudEarrings";
import AdminPanel from "./components/admin-view/AdminPanel";
import AuthLayout from "./components/authLayout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import ProductAdd from "./pages/admin-view/ProductAdd";
import Dashboard from "./pages/admin-view/Dashboard";
import NotFound from "./pages/not-found/Index";
import UserProfile from "./components/shopping-view/UserProfile";
import OrderHistory from "./pages/shopping-view/Orders";
import Cart from "./pages/shopping-view/Cart";
import UserDashboard from "./components/shopping-view/UserDashboard";
import Wishlist from "./pages/shopping-view/Wishlist";
import AddressBook from "./pages/shopping-view/AddressBook";
import { Settings } from "lucide-react";
import { useAuth } from "./components/useAuth";
import UnauthPage from "./pages/not-found/UnauthPage";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<AuthLogin />} />
          <Route path="signup" element={<AuthRegister />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<GoldPrices />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/joy-stud-earrings" element={<JoyStudEarrings />} />
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            // !isAuthenticated ? 
            <AdminPanel />
              // : <Navigate to="/unauth-page" />
          }
        >
          <Route path="product-add" element={<ProductAdd />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
        {/* User Routes */}
        <Route
          path="/user/*"
          element={
            // isAuthenticated ? 
            <UserDashboard />
            // : <Navigate to="/unauth-page" />
          }
        >
          <Route path="profile" element={<UserProfile />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="address-book" element={<AddressBook />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<UserDashboard />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
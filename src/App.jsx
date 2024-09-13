import { Route, Routes } from "react-router-dom";
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
import CheckAuth from "./components/common/CheckAuth";
import UserProfile from "./components/shopping-view/UserProfile";
import OrderHistory from "./pages/shopping-view/Orders";
import Cart from "./pages/shopping-view/Cart";
import UserDashboard from "./components/shopping-view/UserDashboard";
import Wishlist from "./pages/shopping-view/Wishlist.jsx";
import AddressBook from "./pages/shopping-view/AddressBook";
import { Settings } from "lucide-react";
import { useSelector } from "react-redux";

const App = () => {
  // Get authentication state from Redux
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="signin" element={<AuthLogin />} />
          <Route path="signup" element={<AuthRegister />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<GoldPrices />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/joy-stud-earrings" element={<JoyStudEarrings />} />
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminPanel />
            </CheckAuth>
          }
        >
          <Route path="product-add" element={<ProductAdd />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/user"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <UserDashboard />
            </CheckAuth>
          }
        >
          <Route path="profile" element={<UserProfile />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="address-book" element={<AddressBook />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorElement from "./components/ErrorElement";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/AboutPage";
import Contact from "./components/Contact";
import GoldPrices from "./components/GoldPrices";
import Rings from "./components/Rings";
import JoyStudEarrings from "./components/JoyStudEarrings";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />, // Moved inside the root route configuration
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "prices",
        element: <GoldPrices />,
      },
      {
        path: "rings",
        element: <Rings />,
      },
      {
        path: "joy-stud-earrings",
        element: <JoyStudEarrings />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
      },
    ],
  },
]);

export { appRouter };

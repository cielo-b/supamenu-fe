import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Landing from "./pages/Landing";
import CreateProfile from "./pages/profile/CreateProfile";
import RestaurantInformation from "./pages/profile/RestaurantInformation";
import RestaurantTimings from "./pages/profile/RestaurantTimings";
import MenuCreation from "./pages/profile/Menu";
import Client from "./pages/dash/Clients";
import Index from "./pages/dash/Index";
import { OrdersPage } from "./pages/dash/Orders";
import MenuPage from "./pages/dash/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Client />} path="/dashboard/clients" />
        <Route element={<OrdersPage />} path="/dashboard/orders" />
        <Route element={<MenuPage />} path="/dashboard/menu" />
        <Route element={<Index />} path="/dashboard" />
        <Route path="/restaurant" element={<CreateProfile />} />
        <Route
          path="/restaurant/information"
          element={<RestaurantInformation />}
        />
        <Route path="/restaurant/timings" element={<RestaurantTimings />} />
        <Route path="/restaurant/menu" element={<MenuCreation />} />
      </Routes>
    </>
  );
}

export default App;

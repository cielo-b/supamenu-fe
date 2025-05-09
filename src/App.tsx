import { Route, Routes } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";
import { RouteGuard } from "./components/RouteGuard";
import { AuthGuard } from "./components/AuthGuard";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuard>
              <Landing />{" "}
            </AuthGuard>
          }
        />
        <Route
          path="/login"
          element={
            <AuthGuard>
              <Login />{" "}
            </AuthGuard>
          }
        />
        <Route
          path="/register"
          element={
            <AuthGuard>
              <Register />{" "}
            </AuthGuard>
          }
        />

        {/* Protected routes */}
        <Route
          element={
            <RouteGuard>
              <Client />
            </RouteGuard>
          }
          path="/dashboard/clients"
        />

        {/* Dashboard routes */}
        <Route
          element={
            <RouteGuard>
              <OrdersPage />
            </RouteGuard>
          }
          path="/dashboard/orders"
        />
        <Route
          element={
            <RouteGuard>
              <MenuPage />
            </RouteGuard>
          }
          path="/dashboard/menu"
        />
        <Route
          element={
            <RouteGuard>
              <Index />
            </RouteGuard>
          }
          path="/dashboard"
        />

        {/* Restaurant routes */}
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

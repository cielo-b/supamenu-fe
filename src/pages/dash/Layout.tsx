import { ReactNode, useState } from "react";
import {
  BellDot,
  Search,
  User,
  X,
  Home,
  Utensils,
  LogOut,
  Users2,
  User2,
  PieChart,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logout } from "../../features/auth/auth.slice";
import { Dialog } from "@headlessui/react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  activeTab: string;
}

const Layout = ({ children, title, activeTab }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const user = localStorage.getItem("user");
  const userData = user ? JSON.parse(user) : null;

  // Helper function to determine if a tab is active
  const isActive = (tabName: string) =>
    activeTab.toLowerCase() === tabName.toLowerCase();


  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLogoutModalOpen(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen bg-black">
      {/* Logout Confirmation Modal */}
      <Dialog
        open={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        className="relative z-50"
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Modal container */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <Dialog.Title className="text-lg font-bold text-gray-900">
              Confirm Logout
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-gray-600">
              Are you sure you want to logout?
            </Dialog.Description>

            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md border border-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
              >
                Logout
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-black shadow-md">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-4xl text-white font-bold">
            Supa<span className="text-amber-500">Menu</span>
          </h1>
        </div>

        <nav className="flex-1 py-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center p-5 hover:border-l-4 text-white hover:bg-gray-950 border-l-4 ${
                  isActive("Dashboard")
                    ? "border-amber-600 bg-gray-950 text-amber-600"
                    : "border-black hover:border-amber-600 hover:text-amber-600"
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>

            {userData?.role.role === "ROLE_ADMIN" && (
              <li>
                <Link
                  to="/dashboard/clients"
                  className={`flex items-center p-5 hover:border-l-4 text-white hover:bg-gray-950 border-l-4 ${
                    isActive("Clients")
                      ? "border-amber-600 bg-gray-950 text-amber-600"
                      : "border-black hover:border-amber-600 hover:text-amber-600"
                  }`}
                >
                  <User2 className="w-5 h-5" />
                  <span className="ml-3">Clients</span>
                </Link>
              </li>
            )}

            {userData?.role.role === "ROLE_CLIENT" && (
              <li>
                <Link
                  to="/dashboard/menu"
                  className={`flex items-center p-5 hover:border-l-4 text-white hover:bg-gray-950 border-l-4 ${
                    isActive("Menu")
                      ? "border-amber-600 bg-gray-950 text-amber-600"
                      : "border-black hover:border-amber-600 hover:text-amber-600"
                  }`}
                >
                  <Utensils className="w-5 h-5" />
                  <span className="ml-3">Menu</span>
                </Link>
              </li>
            )}
            {userData?.role.role == "ROLE_CLIENT" && (
              <li>
                <Link
                  to="/dashboard/orders"
                  className={`flex items-center p-5 hover:border-l-4 text-white hover:bg-gray-950 border-l-4 ${
                    isActive("Orders")
                      ? "border-amber-600 bg-gray-950 text-amber-600"
                      : "border-black hover:border-amber-600 hover:text-amber-600"
                  }`}
                >
                  <PieChart className="w-5 h-5" />
                  <span className="ml-3">Orders</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="py-4 border-gray-800 border-t">
          <button 
            onClick={() => setIsLogoutModalOpen(true)}
            className="flex items-center w-full p-5 cursor-pointer hover:border-l-4 text-red-600 hover:bg-gray-950 border-l-4 border-black hover:border-red-600 hover:text-red-600"
          >
            <LogOut className="w-5 h-5" />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-500 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Page Title */}
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

            {/* User Controls */}
            <div className="flex items-center gap-4">
              <button className="text-gray-500 cursor-pointer hover:text-amber-500">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-500 cursor-pointer hover:text-amber-500 relative">
                <BellDot className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                {userData && (
                  <span className="hidden md:inline font-medium">
                    {userData.firstName}
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard"
                    className={`flex items-center cursor-pointer p-2 rounded-lg ${
                      isActive("Dashboard")
                        ? "bg-amber-50 text-amber-600"
                        : "hover:bg-amber-50 hover:text-amber-600"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <Home className="w-5 h-5" />
                    <span className="ml-3">Dashboard</span>
                  </Link>
                </li>

                {userData?.role.role === "ROLE_ADMIN" && (
                  <li>
                    <Link
                      to="/dashboard/clients"
                      className={`flex items-center cursor-pointer p-2 rounded-lg ${
                        isActive("Clients")
                          ? "bg-amber-50 text-amber-600"
                          : "hover:bg-amber-50 hover:text-amber-600"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <Users2 className="w-5 h-5" />
                      <span className="ml-3">Clients</span>
                    </Link>
                  </li>
                )}

                {userData?.role.role === "ROLE_CLIENT" && (
                  <li>
                    <Link
                      to="/dashboard/menu"
                      className={`flex items-center cursor-pointer p-2 rounded-lg ${
                        isActive("Menu")
                          ? "bg-amber-50 text-amber-600"
                          : "hover:bg-amber-50 hover:text-amber-600"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <Utensils className="w-5 h-5" />
                      <span className="ml-3">Menu</span>
                    </Link>
                  </li>
                )}
                {userData?.role.role === "ROLE_CLIENT" && (
                  <li>
                    <Link
                      to="/dashboard/orders"
                      className={`flex items-center cursor-pointer p-2 rounded-lg ${
                        isActive("Orders")
                          ? "bg-amber-50 text-amber-600"
                          : "hover:bg-amber-50 hover:text-amber-600"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <PieChart className="w-5 h-5" />
                      <span className="ml-3">Orders</span>
                    </Link>
                  </li>
                )}
                <li>
                  <button 
                    onClick={() => setIsLogoutModalOpen(true)}
                    className="flex items-center cursor-pointer p-2 rounded-lg bg-red-50 text-red-600 w-full"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="ml-3">Logout</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
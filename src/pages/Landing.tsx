import {
  BellDot,
  ForkKnife,
  ListOrderedIcon,
  Search,
  User,
  UserPenIcon,
  X,
} from "lucide-react";
import LandingCard from "../components/LandingCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const user = localStorage.getItem("user");
  const userData = user ? JSON.parse(user) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="flex justify-between items-center p-6 bg-black shadow-sm relative">
        <Link to={"/"} className="text-3xl text-white font-bold">
          Supa<span className="text-amber-500">Menu</span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-amber-500" />
            <BellDot className="w-5 h-5 text-gray-500 cursor-pointer hover:text-amber-500" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              {userData && (
                <span className="font-medium text-white">
                  {userData.firstName}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                <Search className="w-5 h-5 text-gray-500" />
                <span>Search</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                <BellDot className="w-5 h-5 text-gray-500" />
                <span>Notifications</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span>D Regis</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 text-center bg-black flex flex-col w-[100%] items-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Register your restaurant on SupaMenu
        </h1>
        <h3 className="text-xl mb-8">for free and get more revenue!</h3>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-[90%] sm:w-[50%]">
          <button className="text-black bg-amber-500 cursor-pointer w-[100%] px-6 py-3 sm:w-[50%] rounded-lg font-medium hover:bg-black hover:text-amber-500 hover:border-amber-500 border-2 border-amber-500 transition">
            <Link to={"/register"}>Register your Restaurant</Link>
          </button>
          <button className="border-2 border-amber-500 cursor-pointer w-[100%] sm:w-[50%] hover:text-black text-amber-500 px-6 py-3 rounded-lg font-medium hover:bg-amber-500 hover:bg-opacity-10 transition">
            <Link to={"/login"}>Restaurant already registered? Signin</Link>
          </button>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">How it works</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <LandingCard
            icon={<UserPenIcon height={"50px"} width={"50px"} />}
            title="Step 1"
            desc="Register your restaurant"
          />
          <LandingCard
            icon={<ForkKnife height={"50px"} width={"50px"} />}
            title="Step 2"
            desc="Create your restaurant profile and create menu items"
          />
          <LandingCard
            icon={<ListOrderedIcon height={"50px"} width={"50px"} />}
            title="Step 3"
            desc="Start checking additional flows. Go to Settings to activate Wizard"
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;

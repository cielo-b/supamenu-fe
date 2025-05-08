import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  activeTab: string;
}

const Layout = ({ children, title, activeTab }: LayoutProps) => {
  const tabs = [
    {
      id: "information",
      label: "Restaurant Information",
      description: "Restaurant name, address, Details, owner details",
    },
    {
      id: "timings",
      label: "Restaurant Type & Timings",
      description: "Establishment & cuisine type, opening hours",
    },
    {
      id: "menu",
      label: "Create your menu",
      description: "Menu, restaurant, food images",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-md p-6 hidden lg:block sticky top-0 h-screen overflow-y-auto">
        <Link to={"/"} className="text-3xl text-black font-bold">
          Supa<span className="text-amber-500">Menu</span>
        </Link>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">
            1. Create your restaurant profile
          </h2>
          <div className="space-y-4">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={`/restaurant/${tab.id}`}
                className={`block p-4 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? "bg-amber-100 text-amber-600 border-l-4 border-amber-500"
                    : "hover:bg-gray-100"
                }`}
              >
                <h3 className="font-medium">{tab.label}</h3>
                <p className="text-sm text-gray-500">{tab.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
          {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;

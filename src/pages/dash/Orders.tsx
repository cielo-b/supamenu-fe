import { useState } from "react";
import Layout from "./Layout";

const mockOrders = [
  {
    id: 1,
    name: "Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
    variant: "Tom Yummy",
    quantity: 2,
    price: "Frw 5,000",
    guest: "0788123456",
    table: "1",
    status: "New",
  },
  {
    id: 2,
    name: "Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
    variant: "Tom Yummy",
    quantity: 2,
    price: "Frw 5,000",
    guest: "0788123456",
    table: "5",
    status: "New",
  },
  {
    id: 3,
    name: "Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
    variant: "Tom Yummy",
    quantity: 2,
    price: "Frw 5,000",
    guest: "0788123456",
    table: "6",
    status: "New",
  },
  {
    id: 4,
    name: "Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
    variant: "Tom Yummy",
    quantity: 2,
    price: "Frw 5,000",
    guest: "0788123456",
    table: "8",
    status: "New",
  },
];

const statusCounts = {
  Delivered: 6,
  Waiting: 12,
  Rejected: 1,
  All: 30,
};

export const OrdersPage = () => {
  const [selectedTab, setSelectedTab] = useState("New");

  const filteredOrders =
    selectedTab === "All"
      ? mockOrders
      : mockOrders.filter((order) => order.status === selectedTab);

  return (
    <Layout title="Orders" activeTab="Orders">
      <div className="flex justify-between items-start w-full min-h-screen bg-gray-50">
        <div className="w-full flex flex-col space-y-10 lg:flex-row lg:space-y-0 p-6 lg:space-x-6">
          {/* Left Side - Main Content */}
          <div className="flex-1 space-y-6">
            {/* Header with title and date */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-lg shadow-sm space-y-2 sm:space-y-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Orders
              </h2>
              <p className="text-sm text-gray-500 text-left sm:text-right">
                as of{" "}
                {new Date().toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 bg-white p-3 rounded-lg shadow-sm">
              {["New", "Delivered", "Rejected", "All"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 ${
                    selectedTab === tab
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Order Cards */}
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-sm text-gray-500">{order.name}</div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      {order.variant} × {order.quantity}
                    </span>
                    <span className="text-right text-sm font-bold text-amber-600">
                      {order.price}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Table {order.table}</span>
                    <span>Guest</span>
                  </div>
                  <div className="text-sm text-gray-700 mt-1 font-medium">
                    {order.guest}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats Panel */}
          <div className="w-full lg:max-w-80 bg-white rounded-lg shadow-sm p-6 space-y-6 sticky top-6 h-fit">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Order Summary
            </h3>
            <div className="space-y-4">
              {Object.entries(statusCounts).map(([label, count]) => (
                <div
                  key={label}
                  className="flex justify-between items-center p-2 hover:bg-gray-50 rounded transition-colors duration-150"
                >
                  <span
                    className={`font-medium text-sm ${
                      label === "New"
                        ? "text-blue-600"
                        : label === "Delivered"
                        ? "text-green-600"
                        : label === "Rejected"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {label}
                  </span>
                  <span className="font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-full text-xs">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

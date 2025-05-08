import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Layout from "./Layout";

const trendData = [
  { name: "00:00", value: 200 },
  { name: "03:00", value: 300 },
  { name: "06:00", value: 600 },
  { name: "09:00", value: 800 },
  { name: "12:00", value: 500 },
  { name: "15:00", value: 900 },
  { name: "18:00", value: 800 },
  { name: "21:00", value: 700 },
];

const orderData = [
  { name: "Mon", orders: 4000 },
  { name: "Tue", orders: 3000 },
  { name: "Wed", orders: 5000 },
  { name: "Thu", orders: 2000 },
  { name: "Fri", orders: 6000 },
  { name: "Sat", orders: 4500 },
  { name: "Sun", orders: 3500 },
];

const Index = () => {
  return (
    <Layout title="Overview" activeTab="Dashboard">
      <div className="space-y-6">
        {/* Header with navigation */}
        <div className="flex space-x-4 border-b pb-4">
          <button className="font-medium text-amber-600 border-b-2 border-amber-600 pb-2">
            Overview
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Clients</h3>
            <p className="text-2xl font-bold">60</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Revenues (FRW)</h3>
            <p className="text-2xl font-bold">38,234,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Orders</h3>
            <p className="text-2xl font-bold">67,569</p>
          </div>
        </div>

        {/* Today's Trends Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Today's trends</h2>
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
          <div className="flex space-x-2 mb-4">
            <button className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm">
              Today
            </button>
            <button className="px-3 py-1 text-gray-500 hover:text-amber-600 rounded-full text-sm">
              Week
            </button>
            <button className="px-3 py-1 text-gray-500 hover:text-amber-600 rounded-full text-sm">
              Month
            </button>
            <button className="px-3 py-1 text-gray-500 hover:text-amber-600 rounded-full text-sm">
              Year
            </button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#D97706"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Settings Column */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Sales</h2>
            <div className="h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={orderData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#D97706" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-gray-500 text-sm">Orders</h3>
                <p className="text-2xl font-bold">67,569</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">Items</h3>
                <p className="text-2xl font-bold">54,567</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">Sales/hour</h3>
                <p className="text-2xl font-bold">4,560</p>
              </div>
            </div>
          </div>

          {/* Orders Column */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Orders</h2>
            <div className="h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={orderData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#D97706" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-gray-500 text-sm">Orders</h3>
                <p className="text-2xl font-bold">67,569</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">Items</h3>
                <p className="text-2xl font-bold">54,567</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">Order/hour</h3>
                <p className="text-2xl font-bold">4,560</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

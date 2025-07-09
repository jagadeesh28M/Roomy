"use client";
import OrdersTable from "../../../../components/vendor/OrdersTable";
import {
  FaUsers,
  FaMoneyBillWave,
  FaShoppingCart,
  FaRegCommentDots,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const stats = [
  {
    label: "Total customers",
    value: 765,
    icon: <FaUsers size={28} className="text-white" />,
    bg: "bg-orange-500",
  },
  {
    label: "Total income",
    value: "$ 6,760.89",
    icon: <FaMoneyBillWave size={28} className="text-white" />,
    bg: "bg-green-500",
  },
  {
    label: "New Orders",
    value: 150,
    icon: <FaShoppingCart size={28} className="text-white" />,
    bg: "bg-blue-500",
  },
  {
    label: "Unread Chats",
    value: 15,
    icon: <FaRegCommentDots size={28} className="text-white" />,
    bg: "bg-cyan-500",
  },
];

const lineData = [
  { name: "January", Organic: 42, Paid: 20 },
  { name: "February", Organic: 50, Paid: 55 },
  { name: "March", Organic: 48, Paid: 70 },
  { name: "April", Organic: 60, Paid: 65 },
  { name: "May", Organic: 68, Paid: 50 },
  { name: "June", Organic: 65, Paid: 40 },
  { name: "July", Organic: 62, Paid: 60 },
];

const pieData = [
  { name: "Shirts", value: 400, color: "#2563eb" },
  { name: "Shoes", value: 300, color: "#06b6d4" },
  { name: "Bags", value: 300, color: "#a21caf" },
];

function Dashboard() {
  return (
    <div className="bg-[#121317] text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#181920] rounded-lg p-6 flex items-center gap-4 shadow"
          >
            <div
              className={`rounded-full p-3 ${stat.bg} flex items-center justify-center`}
            >
              {stat.icon}
            </div>
            <div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
              <div className="text-2xl font-semibold mt-1">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Analytics */}
        <div className="bg-[#181920] rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">User Analytics</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                formatter={(value, name) => [`${value}`, name]}
                contentStyle={{
                  background: "white",
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  color: "#000000",
                  padding: "8px",
                  width: "fit-content",
                  height: "fit-content",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="Organic"
                stroke="#06b6d4"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="Paid"
                stroke="#a21caf"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-4 justify-center">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500 inline-block"></span>
              <span className="text-gray-300 text-sm">Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-700 inline-block"></span>
              <span className="text-gray-300 text-sm">Paid</span>
            </div>
          </div>
        </div>
        {/* Revenue */}
        <div className="bg-[#181920] rounded-lg p-6 shadow flex flex-col z-50">
          <h2 className="text-xl font-semibold mb-4">Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
              >
                {pieData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`${value}`, name]}
                contentStyle={{
                  background: "white",
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  color: "#000000",
                  padding: "8px",
                  width: "fit-content",
                  height: "fit-content",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-4 justify-center">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: item.color }}
                ></span>
                <span className="text-gray-300 text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OrdersTable />
    </div>
  );
}

export default Dashboard;

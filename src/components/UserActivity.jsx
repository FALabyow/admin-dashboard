import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 2 },
  { name: "Feb", users: 4 },
  { name: "Mar", users: 6 },
  { name: "Apr", users: 8 },
  { name: "May", users: 10 },
  { name: "Jun", users: 12 },
  { name: "Jul", users: 14 },
  { name: "Aug", users: 16 },
  { name: "Sep", users: 18 },
  { name: "Oct", users: 20 },
  { name: "Nov", users: 22 },
  { name: "Dec", users: 24 },
];

const UserActivity = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <h2 className="font-semibold mb-3">User Activity</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#8D6944" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivity;
import React, { useState } from "react";
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
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());

  const years = Array.from({ length: 2045 - 2020 + 1 }, (_, i) => 2020 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <h2 className="font-semibold mb-3">User Activity</h2>

      <div className="flex items-center space-x-2 mb-3 text-gray-600 text-sm">
        <span className="mr-1">Month:</span>
        <select
          className="border rounded p-1 text-sm"
          value={month}
          onChange={(e) => setMonth(parseInt(e.target.value))}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <span className="mr-1">Day:</span> 
        <select className="border rounded p-1 text-sm" value={day} onChange={(e) => setDay(parseInt(e.target.value))}>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <span className="mr-1">Year:</span>
        <select className="border rounded p-1 text-sm" value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

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
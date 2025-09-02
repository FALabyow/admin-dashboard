import React from "react";

const users = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Smith", email: "jane@example.com" },
  { name: "Michael Johnson", email: "michael@ampil.com" },
  { name: "Emily Brown", email: "emily@example.com" },
  { name: "William Davis", email: "william@example.com" },
  { name: "Monkey D. Luffy", email: "luffymugiwara@example.com" },
  { name: "Roronoa Zoro", email: "piratehunter@example.com" },
];

const RecentUsers = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4" style={{ height: 310 }} >
      <h2 className="font-semibold mb-5">Recent Users</h2>
      <ul style={{ overflowY: 'auto', maxHeight: '220px' }}>
        {users.map((user, i) => (
          <li key={i} className="flex justify-between py-2.5 border-b last:border-none pr-4">
            <span>{user.name}</span>
            <span className="text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentUsers;
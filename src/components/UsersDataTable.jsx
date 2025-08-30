import React from "react";

const users = [
  { id: 1, name: "Jeng Jeng", status: "Active", email: "jhengs@ampil.com" },
  { id: 2, name: "Jane Smith", status: "Inactive", email: "jane@example.com" },
  { id: 3, name: "Michael Johnson", status: "Inactive", email: "michael@ampil.com" },
  { id: 4, name: "John Doe", status: "Inactive", email: "john@example.com" },
];

const UsersDataTable = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mt-6">
      <h2 className="font-semibold mb-3">Users Data</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className={`p-2 ${u.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                {u.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersDataTable;
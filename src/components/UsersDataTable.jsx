import React from "react";

const UsersDataTable = () => {
  const users = [
    { name: "Jeng Jeng", email: "jhengs@ampil.com", date: "2023-10-01", status: "Active" },
    { name: "John Doe", email: "john@example.com", date: "2023-10-01", status: "Inactive" },
    { name: "Jane Smith", email: "jane@example.com", date: "2023-10-01", status: "Inactive" },
    { name: "Michael Johnson", email: "michael@ampil.com", date: "2023-10-01", status: "Inactive" },
    { name: "Emily Brown", email: "emily@example.com", date: "2023-10-01", status: "Inactive" },
    { name: "William Davis", email: "willian@example.com", date: "2023-10-01", status: "Inactive" },
    { name: "Monkey D. Luffy", email: "luffymugiwara@example.com", date: "2023-10-01", status: "Inactive" },
    { name: "Roronoa Zoro", email: "piratehunter@example.com", date: "2023-10-01", status: "Inactive" },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-2xl w-full h-full overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4 text-[#4f3e2d]">Users Data</h2>
      <div className="overflow-x-auto" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 font-medium text-sm md:text-base">Name</th>
              <th className="p-3 font-medium text-sm md:text-base">Email</th>
              <th className="p-3 font-medium text-sm md:text-base">Created At</th>
              <th className="p-3 font-medium text-sm md:text-base">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-t">
                <td className="p-3 truncate max-w-[120px] text-sm md:text-base">{u.name}</td>
                <td className="p-3 truncate max-w-[120px] text-sm md:text-base">{u.email}</td>
                <td className="p-3 truncate max-w-[180px] text-sm md:text-base">{u.date}</td>
                <td
                  className={`p-3 font-medium text-sm md:text-base ${
                    u.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {u.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersDataTable;
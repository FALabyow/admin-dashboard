import React from "react";

const UserStatus = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="bg-white shadow-md rounded-2xl p-4 text-center">
        <h2 className="text-gray-600 text-sm">Total Users</h2>
        <p className="text-2xl font-bold text-[#BB9672]">1,250</p>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-4 text-center">
        <h2 className="text-gray-600 text-sm">Active Users</h2>
        <p className="text-2xl font-bold text-[#AC8053]">1</p>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-4 text-center">
        <h2 className="text-gray-600 text-sm">Inactive Users</h2>
        <p className="text-2xl font-bold text-[#8D6944]">3</p>
      </div>
    </div>
  );
};

export default UserStatus;
import React from "react";
import UserStatus from "../components/UserStatus";
import UserActivity from "../components/UserActivity";
import RecentUsers from "../components/RecentUsers";
import UsersDataTable from "../components/UsersDataTable";
import avatar from "../assets/avatar.png";

const Profile = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 shadow rounded-2xl">
        <h1 className="text-xl font-bold text-[#4f3e2d]">User Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="font-medium">Admin</span>
          <img
            src={avatar}
            alt="Admin avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Stats row */}
      <UserStatus />

      {/* Activity + Recent Users */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserActivity />
        <RecentUsers />
      </div>

      {/* Data Table */}
      <UsersDataTable />
    </div>
  );
};

export default Profile;
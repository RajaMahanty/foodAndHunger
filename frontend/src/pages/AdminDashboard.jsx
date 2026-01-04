import React from "react";
import { dashboardData } from "../data/dashboardMockData";

const AdminDashboard = () => {
  return (
    <div className="p-6">

        <h1 style={{ color:"red", fontSize: "30px"}}>
            ADMIN DASHBOARD TEST
        </h1>
      <h1 className="text-2xl font-bold mb-6">
        Admin Analytics Dashboard
      </h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-500">Total Meals Saved</p>
          <p className="text-2xl font-semibold">
            {dashboardData.mealsSaved}
          </p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-500">Top Donors</p>
          <p className="text-2xl font-semibold">
            {dashboardData.topDonors.length}
          </p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-500">Delivery Agents</p>
          <p className="text-2xl font-semibold">
            {dashboardData.deliveryAgents.length}
          </p>
        </div>
      </div>

      {/* Placeholder sections */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="font-semibold mb-2">
          Donations Trend (Chart will come here)
        </h2>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h2 className="font-semibold mb-2">
          Delivery Agent Performance (Table / Chart)
        </h2>
      </div>
    </div>
  );
};

export default AdminDashboard;

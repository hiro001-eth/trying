import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
      <div className="mt-4">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                {/* Icon */}
              </div>
              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">8</h4>
                <div className="text-gray-500">New Applications</div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div className="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                {/* Icon */}
              </div>
              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">12</h4>
                <div className="text-gray-500">Active Jobs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

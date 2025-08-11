import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white font-bold uppercase">Udaan Agencies</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-gray-800">
          <NavLink
            to="/admin/dashboard"
            className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/jobs"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Jobs
          </NavLink>
          <NavLink
            to="/admin/applications"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Applications
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

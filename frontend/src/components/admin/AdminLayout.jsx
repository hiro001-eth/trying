import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import AdminDashboard from '../../pages/AdminDashboard';
import JobListPage from '../../pages/JobListPage';
import ApplicationListPage from '../../pages/ApplicationListPage';
import JobDetailPage from '../../pages/JobDetailPage';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <Switch>
              <Route path="/admin/dashboard" component={AdminDashboard} />
              <Route path="/admin/jobs/:id" component={JobDetailPage} />
              <Route path="/admin/jobs" component={JobListPage} />
              <Route path="/admin/applications" component={ApplicationListPage} />
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

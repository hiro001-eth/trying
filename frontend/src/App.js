import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin" component={AdminLayout} />
      </Switch>
    </Router>
  );
}

export default App;

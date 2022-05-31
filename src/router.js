import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import User from './pages/User';
import Login from './pages/Login';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: 'user', element: <User /> },
        { path: 'login', element: <Login /> },
      ],
    },
  ]);
}

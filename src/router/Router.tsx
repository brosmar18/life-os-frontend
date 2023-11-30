import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import Calendar from '../pages/calendar/Calendar';
import Users from '../pages/users/Users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/calendar', element: <Calendar /> },
      { path: '/users', element: <Users /> },
    ],
  },
]);

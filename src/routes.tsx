import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/layout';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;

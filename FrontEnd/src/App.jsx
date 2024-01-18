import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import HomePage from './components/HomePage/HomePage.jsx';
import ViewAllCustomer from './components/ViewAllCustomer/ViewAllCustomer.jsx';
import ViewOneCustomer from './components/ViewOneCustomer/ViewOneCustomer.jsx';
import TransferForm from './components/TransferForm/TransferForm.jsx';
import DefaultLayout from './components/DefaultLayout/DefaultLayout.jsx';


function App() {

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/home', element: <HomePage /> },
        { path: '/allCustomers', element: <ViewAllCustomer /> },
        { path: '/customer/:receiverId', element: <ViewOneCustomer /> },
        { path: '/transferForm/:receiverId', element: <TransferForm /> },
      ]
    }
  ]);
  return (
    <RouterProvider router={ routers } />
  );
}
export default App;

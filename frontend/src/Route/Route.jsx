import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/AboutPage/About";
import Home from "../pages/homePage/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Dashboard/Statistics";
import ManageItems from "../Dashboard/ManageCars";
import AllUsers from "../Dashboard/AllUsers";
import ManageBookings from "../Dashboard/ManageBookings";
import PaymentHistory from "../Dashboard/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import AllItems from "../pages/AllCars/AllCars";
import CardDetails from "../components/CardDetails";
import AddCar from "../Dashboard/AddCar";
import AdminRoute from "./AdminRoute";
import Orders from "../Dashboard/Orders";
import Profile from "../components/Profile";

const API = import.meta.env.VITE_API_URL;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/cars',
        element: <AllItems></AllItems>
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/carDetails/:id',
        element: <CardDetails />,
        loader: ({ params }) => fetch(`${API}/carDetails/${params.id}`)
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'statistics',
        element: <PrivateRoute><Statistics /></PrivateRoute>
      },
      {
        path: 'addCar',
        element: <AdminRoute><AddCar /></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: 'orders',
        element: <AdminRoute><Orders /></AdminRoute>
      },
      {
        path: 'manageBookings',
        element: <PrivateRoute><ManageBookings /></PrivateRoute>
      },

      {
        path: 'paymentHistory',
        element: <PrivateRoute><PaymentHistory /></PrivateRoute>
      }
    ]
  }
  ,
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

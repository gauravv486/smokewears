import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserLayout from './components/Layout/UserLayout';
import AdminLayout from './components/Layout/AdminLayout';
import MenSection from './components/Common/MenSection';
import HomePage from './components/Home/HomePage';
import WomenSection from './components/Common/WomenSection';
import TopWear from './components/Common/TopWear';
import BottomWear from './components/Common/BottomWear';
import CartPage from './components/Cart/CartPage';
import Feed from './components/Common/Feed';
import ProductDetail from './components/Common/ProductDetail';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import SearchFeed from './components/Common/SearchFeed';
import PrivateRoute from './utils/PrivateRoute';

function App() {

  const router = createBrowserRouter([

    {
      path: "/signup", element: <Signup />
    },
    {
      path: "/login", element: <Login />
    },

    {
      path: "/",
      element: <UserLayout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "/men", element: <MenSection /> },
        { path: "/women", element: <WomenSection /> },
        { path: "/topwear", element: <TopWear /> },
        { path: "/bottomwear", element: <BottomWear /> },
        {
          path: "/cart", element:
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
        },
        { path: "/feed", element: <Feed /> },
        {
          path: "/product/:productId", element:
            <PrivateRoute>
              <ProductDetail />
            </PrivateRoute>
        },
        {
          path: "/search", element:
            <PrivateRoute>
              <SearchFeed />
            </PrivateRoute>
        }
      ]
    },

    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "", element: "" }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;

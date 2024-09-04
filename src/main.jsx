import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import Home from './pages/Home/Home';
import BuySell from './pages/BuySell';
import AboutUs from './pages/AboutUs';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/buy-sell",
        element: <BuySell></BuySell>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/properties",
        element: <Properties></Properties>,
      },
      {
        path: "/property-details",
        element: <PropertyDetails></PropertyDetails>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

import Dashboard from "@/Admin/Dashboard";
import ServiceList from "@/Admin/ServiceList";
import App from "@/App";
import AdminLayout from "@/components/Layouts/AdminLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
    ],
  },
]);

export default router;

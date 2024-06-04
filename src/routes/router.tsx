import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../pagesSide/components/Layout/LayoutSide";
import HomePage from "../pagesSide/Pages/HomePage";
import LayoutAdmin from "../pagesAdmin/components/Layout/LayoutAdmin";
import DashboardPage from "../pagesAdmin/components/Pages/DashboardPage";
import SettingsPage from "../pagesAdmin/components/Pages/SettingsPage";
import AboutPage from "../pagesSide/Pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutSide/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/about',
        element: <AboutPage/>,
      }
    ]
  },
  {
    path: '/admin',
    element: <LayoutAdmin/>,
    children: [
      {
        path: '/admin/dashboard',
        element: <DashboardPage/>
      },
      {
        path: '/admin/settings',
        element: <SettingsPage/>
      }
    ]
  }
])
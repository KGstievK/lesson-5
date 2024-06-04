import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../pagesSide/components/Layout/LayoutSide";
import HomePage from "../pagesSide/Pages/HomePage";
import LayoutAdmin from "../pagesAdmin/components/Layout/LayoutAdmin";

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
     
    ]
  }
])
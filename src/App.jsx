import { useState } from "react";
import './App.css'

import Home from "./components/home/home.jsx"
import About from "./components/about/about.jsx";
import NotFound from "./components/notFound/notFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.jsx";
import DashboardItems from "./components/dashboardItem/dashboardItem.jsx";
import Layout from "./components/layout/layout.jsx";
import Favorites from "./components/favorites/favorites.jsx";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=9279144549db2b50ce44742b70a38cdb";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/:id", element: <DashboardItems /> },
      { path: "/about", element: <About /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

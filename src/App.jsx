import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Owner from "./pages/Owner";
import Admin1 from "./pages/Admin1";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
        element: <Layout />, // Parent route element
        children: [ // Nested routes
          { path: "/", element: <Home /> },
          { path: "/user", element: <User /> },
          { path: "/admin", element: <Admin /> },
          { path: "/admin1", element: <Admin1 /> },
          { path: "/owner", element: <Owner /> },
    
      ],
    }
  ]);    
  

  
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


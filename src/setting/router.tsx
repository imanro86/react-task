
import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './root'
import ErrorPage from './erorrpage'
import Login from '../screen/login/login';
import Home from '../screen/home/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  
]);


 const Router = () => {
  return (
    <React.StrictMode>
       <RouterProvider router={router} />
    </React.StrictMode>
  )
}


export default Router ;






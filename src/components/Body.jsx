import React, { useEffect } from 'react';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch=useDispatch();
 
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/browse",
      element:<Browse />
    }
  ])

  
  return (
    <div> 
    <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;

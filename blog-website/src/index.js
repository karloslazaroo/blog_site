import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Homepage'
import Projects from'./pages/Projects/Projects'
import Posts from './pages/Posts/Posts'
import AboutMe from './pages/Aboutme/Aboutme'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "projects",
    element: <Projects/>,
  },
  {
    path: "posts",
    element: <Posts/>,
  },{
    path: "aboutme",
    element: <AboutMe/>,
  },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



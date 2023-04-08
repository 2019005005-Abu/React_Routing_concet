import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Main from './Component/Lay_out/Main';
import OrderReviews from './Component/Lay_out/OrderReviews/OrderReviews';
import CheckOut from './Component/Lay_out/About/CheckOut';
import Contact from './Component/Lay_out/Contact/Contact';
import GrandPa from './Component/GrandPa/GrandPa';


const router=createBrowserRouter([
 {
  path:"/",
  element:<Main></Main>,
  children:[
    {
    path:'/',
    element:<Home></Home>,
    loader:()=>fetch('t_shirt.json'),
    },{
      path:'/orderReview',
      element:<OrderReviews></OrderReviews>
    },{
      path:'/checkout',
      element:<CheckOut></CheckOut>
    },{
      path:'/contact',
      element:<Contact></Contact>
    },{
      path:'/grandPa',
      element:<GrandPa></GrandPa>
    }
  ]
 }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

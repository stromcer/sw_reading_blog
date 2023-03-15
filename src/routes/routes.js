import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../layout/Home.jsx';
import PlanetDetails from '../layout/PlanetDetails.jsx';
import Layout from '../layout/Layout.jsx';


 const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
        {
            path:"/",
            element:<Home/>
        },
        { 
            path:'/planetdetails',
            element:<PlanetDetails/>
        }]
    },
    
])

export default router;
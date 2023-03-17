import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../views/Home.jsx';
import PlanetDetails from '../views/PlanetDetails.jsx';
import Layout from '../layout/Layout.jsx';


const innerRoutes = [
    {
        path:"/",
        element:<Home/>
    },
    { 
        path:'/planetdetails',
        element:<PlanetDetails/>
    }
];

const fullRoutes = [{
    path:'/',
    element: <Layout/>,
    children: innerRoutes
}];

const router = createBrowserRouter(fullRoutes)

export default router;



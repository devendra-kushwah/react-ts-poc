import React from 'react';
import { Route, Outlet, Navigate } from "react-router-dom";
import { Dashboard } from "../Pages";


const PrivateRoutes = ()=> {
 let token = false;
 return token ? <Outlet /> : <Navigate to="/login" />
}

const renderPrivateRoutes = (
    <>
    <Route path="/" element={<PrivateRoutes />}>
       <Route path="/dashboard" element={<Dashboard />} />
    </Route>
    </>
  )


export { PrivateRoutes, renderPrivateRoutes };
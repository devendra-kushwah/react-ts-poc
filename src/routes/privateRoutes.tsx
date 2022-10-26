import React, { useEffect } from 'react';
import { Route, Outlet, Navigate } from "react-router-dom";
import { Dashboard } from "../Pages";

const PrivateRoutes = ()=> {
  let token:string = "qwertyuiop";
  useEffect(()=> {
    localStorage.setItem("token", token || "");
  }, [token])

 return token ? <Outlet /> : <Navigate to="/login" />
}

const renderPrivateRoutes = (
    <Route path="/dashboard" element={<PrivateRoutes />}>
       <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )


export { renderPrivateRoutes };
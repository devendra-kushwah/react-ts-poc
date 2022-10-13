import { Route, Outlet, Navigate } from "react-router-dom";
import { Dashboard } from "../Pages";

const PrivateRoutes = ()=> {
 let token:string = "";
 localStorage.setItem("token", token);
 return token ? <Outlet /> : <Navigate to="/login" />
}

const renderPrivateRoutes = (
    <Route path="/dashboard" element={<PrivateRoutes />}>
       <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )


export { renderPrivateRoutes };
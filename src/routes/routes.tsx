import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, LonIn, SignUp } from "../Pages";

import { renderPrivateRoutes} from "./privateRoutes";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LonIn />} />
        <Route path="/signup" element={<SignUp />} />
        { renderPrivateRoutes }
      </Routes>
    </BrowserRouter>
   
  );
}
export default Router;

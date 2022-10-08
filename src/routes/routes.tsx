import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LonIn } from "../Pages";
import { renderPrivateRoutes} from "./privateRoutes";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LonIn />} />
        { renderPrivateRoutes }
      </Routes>
    </BrowserRouter>
   
  );
}
export default Router;

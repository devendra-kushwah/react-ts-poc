import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, LongIn, SignUp } from "../modules";
import { renderPrivateRoutes } from "./privateRoutes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LongIn />} />
        <Route path="/signup" element={<SignUp />} />
        {renderPrivateRoutes}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Router from "./routes/routes";
import UserContext from "./utils/context/user";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <UserContext.Provider value={"devendra"}>
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;

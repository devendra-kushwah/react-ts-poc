import React from "react";
import "./App.css";
import Router from "./routes/routes";
import UserContext from "./utils/context/user";

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"devendra"}>
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;

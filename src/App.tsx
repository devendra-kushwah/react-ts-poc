import React from 'react';
import './App.css';
import PropsExample from "./Components/PropsExample";

function App() {
  const ps = {
    name: "ABC"
  }
  const { name } = ps;
  
  return (
    <div className="App">
     Hi There I am TS 
     <PropsExample name={name} />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App1 from "./App1";
import App2 from "./App2";
 function Travel()
 {
  return(
    <div>
      <h1 style={{color:"blue"}}>Travel by bus or car</h1>
      <App2></App2>
      <App1></App1>
    </div>
  );
 }
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Travel/>);



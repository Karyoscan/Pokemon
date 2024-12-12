import React from "react";
import "./index.css";
import Navbar from "./Compannet/Navbar";
import Main from "./Compannet/Main";
import Start from "./Compannet/Start";





function App() {


  return (
    <div className="h-screen">
      <Navbar />
     <Start />
      <div className="flex justify-center bg-green-200  h-[70%] ">
        <Main />
      </div>
    </div>
  );
}

export default App;

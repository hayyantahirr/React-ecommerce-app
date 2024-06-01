import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>


    
      <Navbar />

      <div className="flex flex-wrap justify-center gap-7 mt-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;

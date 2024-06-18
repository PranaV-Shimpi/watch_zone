import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-2">
        <Sidebar />
        {/* Video Render here */}
      </div>
    </div>
  );
};

export default App;

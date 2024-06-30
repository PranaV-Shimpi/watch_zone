import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Watch from "./components/Watch";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="watch" element={<Watch />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";







const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

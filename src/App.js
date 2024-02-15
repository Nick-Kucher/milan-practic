// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import History from "./components/History";
import Team1 from "./components/Team1";
import Team2 from "./components/Team2";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<History />} />
          <Route path="/team" element={<Team1 />} />
          <Route path="/youth" element={<Team2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Default from "./pages/Default";

const App: React.FC = () => {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        <Link to="/login" style={{ marginRight: 10 }}>
          About
        </Link>
        <Link to="/default" style={{ marginRight: 10 }}>
          Default
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/default" element={<Default />} />
      </Routes>
    </div>
  );
};

export default App;

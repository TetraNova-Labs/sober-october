import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ROUTES from "./routes/paths";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.login} element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

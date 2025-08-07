import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../routes/paths.ts";

const Navbar: React.FC = () => {
  return (
    <nav style={{ marginBottom: 20 }}>
      <Link to={ROUTES.home} style={{ marginRight: 10 }}>
        Home
      </Link>
      <Link to={ROUTES.about} style={{ marginRight: 10 }}>
        About
      </Link>
      <Link to={ROUTES.login} style={{ marginRight: 10 }}>
        Login
      </Link>
    </nav>
  );
};

export default Navbar;

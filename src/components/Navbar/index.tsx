import { Link } from "react-router-dom";

import "./style.scss";

export const Navbar = () => {
  return (
    <>
      <nav className="navcont noselect">
        <h3 className="logo">Kruzus</h3>
        <div className="links">
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/projects">
            Projects
          </Link>
          <Link className="item" to="/about">
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

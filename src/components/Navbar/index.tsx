import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export const Navbar = () => {
  const headertitle = "Logo"
  const SITE_TITLE = "kruzus' page"
  useEffect(() => {
    document.title = SITE_TITLE;
  })
  return (
    <>
      <nav className="navcont noselect">
        <h3 className="logo">{ headertitle}</h3>
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

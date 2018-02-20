import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="nav nav-pills nav-fill">
    <Link href="/" className="nav-item nav-link  " to="/">
      Home
    </Link>
    <Link href="/page2" className="nav-item nav-link " to="/page2">
      Page2
    </Link>
    <a className="nav-item nav-link" href="https://github.com/jwill9999/">
      GitHub
    </a>
    <a className="nav-item nav-link disabled" href="http://letuscode.co.uk">
      LetusCode
    </a>
  </nav>
);

export default Header;

import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <span className="navbar-brand">
            <Link to="/">GitHub Explorer </Link>
          </span>

          <a
            href="https://github.com/iKuroiNeko/github-explorer"
            className="navbar__link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
            &nbsp;Check it out on GitHub!
          </a>
        </div>
      </div>
    </nav>
  );
}

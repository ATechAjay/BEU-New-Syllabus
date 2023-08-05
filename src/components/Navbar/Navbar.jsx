import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className={`navbar fixed-top bg-dark navbar-dark navbar-expand-md navbar-collapse-md ${style["navbar-container"]}`}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className={`navbar-brand m-0 ${style.logo}`} to="/">
          BEU Exam Corner
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto g-5">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#syllabus">
                Syllabus
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                University
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Portals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

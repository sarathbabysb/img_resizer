import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand logo">
            <i className="fa-solid fa-scissors"></i>{" "}
            {process.env.REACT_APP_NAME}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/img-resizer"
                  className="nav-link"
                  aria-current="page"
                >
                  Resize Image
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/img-compressor" className="nav-link">
                  Compress Image
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/img-converter" className="nav-link">
                  Converte Image
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/img-crop" className="nav-link">
                  Crop Image
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ms-5 me-5">
          <Link to="/" className="nav-link active navbar-brand ps-5">
            SHOPNOW
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-3">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  CONTACT
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  ABOUT
                </Link>
              </li>
            </ul>
            <div className="d-flex me-2 nav-icon ">
              <form className="me-5 mt-2 ">
                <Link to="/Search" className="nav-link text-muted">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search for Products Brands and more"
                    aria-label="Search"
                  />
                </Link>
              </form>
              <div className="profile text-center me-3">
                <Link to="/login" className="nav-link text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </Link>
                <p className="icon-title">Profile</p>
              </div>

              <div className="bag text-center ">
                <Link to="/cart" className="nav-link text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </Link>
                <p className="icon-title">Bag</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;

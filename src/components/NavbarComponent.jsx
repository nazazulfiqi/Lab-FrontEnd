import React from "react";

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
      <div className="container">
        <a class="navbar-brand me-0" href="#">
          <img
            src="assets/images/logowhite.svg"
            width="80%"
            class="d-inline-block align-text-top mx-auto"
          />
        </a>
        <button
          className="navbar-toggler mt-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto mt-2">
            <a className="nav-link me-4" aria-current="page" href="#">
              Beranda
            </a>
            <a className="nav-link me-4" href="#">
              Berita
            </a>
            <a className="nav-link me-4" href="#">
              File
            </a>
            <a className="nav-link me-4" href="#">
              Struktur
            </a>
            <a className="nav-link me-4" href="#">
              Kontak
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;

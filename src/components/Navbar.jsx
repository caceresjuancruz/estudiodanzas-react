import React, { useEffect } from "react";
import $ from "jquery";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

var spinner = function () {
  setTimeout(function () {
    if ($("#spinner").length > 0) {
      $("#spinner").removeClass("show");
    }
  }, 1);
};

function Navbar() {
  useEffect(() => {
    spinner();
  });

  return (
    <div>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border position-relative text-primary"
          style={{ width: "6rem", height: "6rem" }}
          role="status"
        ></div>
      </div>
      {/* Spinner End */}

      {/* Topbar Start */}
      <div
        className="container-fluid bg-light px-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row gx-0 align-items-center d-none d-lg-flex">
          <div className="col-lg-6 px-5 text-start">
            <Router>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a className="small text-secondary" href="/">
                    Inicio
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="small text-secondary" href="/#estudio">
                    Estudio
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="small text-secondary" href="/#clases">
                    Clases
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <NavLink className="small text-secondary" to="/contacto">
                    Contacto
                  </NavLink>
                </li>
              </ol>
            </Router>
          </div>
          <div className="col-lg-6 px-5 text-end">
            <small>Redes:</small>
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className="btn-square text-primary border-end rounded-0"
                href="https://www.facebook.com/estudiodedanzas.vivianamusso.39"
                target="_BLANK"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn-square text-primary border-end rounded-0"
                href="https://www.instagram.com/estudiodedanzasvivianamusso/"
                target="_BLANK"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn-square text-primary pe-0"
                href="https://www.youtube.com/channel/UC4pI_BT16EECalQquqY_KcA"
                target="_BLANK"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Brand & Contact Start */}
      <div
        className="container-fluid py-4 px-5 wow fadeIn"
        data-wow-delay="0.1s"
        id="brand-container"
      >
        <div className="row align-items-center top-bar">
          <div className="col-lg-4 col-md-12 text-center text-lg-start">
            <a href="/" className="navbar-brand m-0 p-0">
              <h1 className="fw-bold text-primary m-0">
                <img
                  loading="lazy"
                  className="logo mx-3"
                  src="./img/vividanzalogo.png"
                  alt="Logo"
                />
                <span className="nombre-logo">
                  Estudio de Danzas
                  <span id="viviana-musso">Viviana Musso</span>
                </span>
              </h1>
            </a>
          </div>
          <div className="col-lg-8 col-md-7 d-none d-lg-block">
            <div className="row">
              <div className="col-4">
                <div className="d-flex align-items-center justify-content-end"></div>
              </div>
              <div className="col-4">
                <div className="d-flex align-items-center justify-content-end">
                  <div
                    className="flex-shrink-0 btn-lg-square border rounded-circle"
                    id="nav-info-icon"
                  >
                    <i className="fa fa-phone text-primary"></i>
                  </div>
                  <div className="ps-3" id="nav-info">
                    <p className="mb-2">Contactate!</p>
                    <h6 className="mb-0" id="nav-info">
                      +54 9 3492 566832
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex align-items-center justify-content-end">
                  <div
                    className="flex-shrink-0 btn-lg-square border rounded-circle"
                    id="nav-info-icon"
                  >
                    <i className="far fa-envelope text-primary"></i>
                  </div>
                  <div className="ps-3" id="nav-info">
                    <p className="mb-2">Correo</p>
                    <h6 className="mb-0" id="nav-info">
                      estudiodedanzasvivianamusso@gmail.com
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand & Contact End */}

      {/* Navbar Start */}
      <nav
        className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a href="/" className="navbar-brand d-lg-none">
          <img
            loading="lazy"
            className="logo-movil mx-3"
            src="./img/vividanzalogo.png"
            alt="Logo"
          />
        </a>
        <button
          type="button"
          className="navbar-toggler me-3"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav me-auto p-3 p-lg-0">
            <Router>
              <a href="/" className="nav-item nav-link">
                Inicio
              </a>
              <a href="/#estudio" className="nav-item nav-link">
                Estudio
              </a>
              <a href="/#clases" className="nav-item nav-link">
                Clases
              </a>
              <NavLink to="/contacto" className="nav-item nav-link">
                Contacto
              </NavLink>
            </Router>
          </div>
          <a
            href="/"
            className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block"
            id="btn-start"
          >
            Get Started
          </a>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
}

export default Navbar;

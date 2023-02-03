import React, { useEffect } from "react";
import $ from "jquery";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contacto from "./components/Contacto";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";

import Iniciacion from "./components/Iniciacion";
import DanzaClasica from "./components/DanzaClasica";
import DanzaJazz from "./components/DanzaJazz";
import ProfesoradoClasica from "./components/ProfesoradoClasica";
import ProfesoradoJazz from "./components/ProfesoradoJazz";
import Clases from "./components/Clases";
import Estudio from "./components/Estudio";
import Shows from "./components/Shows";
import Show from "./components/Show";
import Show2 from "./components/Show2";
import Page404 from "./components/Page404";
import Reglamento from "./components/Reglamento";
import FormularioInscripcion from "./components/FormularioInscripcion";

var spinner = function () {
  setTimeout(function () {
    if ($("#spinner").length > 0) {
      $("#spinner").removeClass("show");
    }
  }, 1);
};

function App() {
  useEffect(() => {
    spinner();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  let location = useLocation();

  return (
    <div className="App">
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
            <div className="col-lg-6 px-5 py-0 text-start"></div>
            <div className="col-lg-6 px-5 py-0 text-end">
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
                  <p className="nombre-logo">
                    Estudio de Danzas
                    <span id="viviana-musso"> Viviana Musso</span>
                  </p>
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
          className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn shadow"
          data-wow-delay="0.1s"
          id="navbar"
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
              <NavLink
                to="/"
                className="nav-item nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/estudio"
                className="nav-item nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Estudio
              </NavLink>
              <NavLink
                to="/clases"
                className="nav-item nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Clases
              </NavLink>
              <NavLink
                to="/contacto"
                className="nav-item nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contacto
              </NavLink>
              <NavLink
                to="/reglamento"
                className="nav-item nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Reglamento
              </NavLink>
              <NavLink
                to="/inscripcion"
                className="nav-item nav-link fw-bold inscripcion-button"
                onClick={() => window.scrollTo(0, 0)}
              >
                <b className="border rounded-5 p-3">¡Inscribite Aquí!</b>
              </NavLink>
              <NavLink
                to="/shows"
                className="nav-item nav-link d-none"
                onClick={() => window.scrollTo(0, 0)}
              >
                Shows
              </NavLink>
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

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/estudio" element={<Estudio />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shows/funcion-1" element={<Show />} />
        <Route path="/shows/funcion-2" element={<Show2 />} />

        <Route path="/iniciacion-a-la-danza" element={<Iniciacion />} />
        <Route path="/danza-clasica" element={<DanzaClasica />} />
        <Route path="/danza-jazz" element={<DanzaJazz />} />
        <Route
          path="/profesorado-danza-clasica"
          element={<ProfesoradoClasica />}
        />
        <Route path="/profesorado-danza-jazz" element={<ProfesoradoJazz />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/reglamento" element={<Reglamento />} />
        <Route path="/inscripcion" element={<FormularioInscripcion />} />
      </Routes>

      {location.pathname !== "/shows/funcion-1" &&
      location.pathname !== "/shows/funcion-2" &&
      location.pathname !== "/shows" ? (
        <Footer />
      ) : null}

      <style jsx="true">{`
        .inscripcion-button {
          margin-top: 1rem;
        }

        @media (min-width: 992px) {
          .inscripcion-button {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;

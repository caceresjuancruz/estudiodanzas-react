import React from "react";
import { NavLink } from "react-router-dom";
import { inscriptionFormUrl } from "../utils/constants.ts";

function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <footer
        className="container-fluid bg-dark text-body footer wow fadeIn sticky-bottom"
        data-wow-delay="0.1s"
        style={{ zIndex: 1000 }}
      >
        <div className="container py-3">
          <div className="row g-5">
            <div className="col-lg-6 col-md-6">
              <div className="footer-contact-container">
                <h5 className="text-light mb-4">Dirección</h5>
                <p className="footer-contact-item mb-2">
                  <i className="fa fa-map-marker-alt me-3"></i>Colón 315,
                  Rafaela, Santa Fe
                </p>
                <p className="footer-contact-item mb-2">
                  <i className="fa fa-phone-alt me-3"></i>+54 9 3492 566832
                </p>
                <p className="footer-contact-item mb-2">
                  <i className="fa fa-envelope me-3"></i>
                  estudiodedanzasvivianamusso@gmail.com
                </p>
              </div>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle me-1"
                  href="https://www.instagram.com/estudiodedanzasvivianamusso/"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle me-1"
                  href="https://www.facebook.com/estudiodedanzas.vivianamusso.39"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle me-1"
                  href="https://www.youtube.com/channel/UC4pI_BT16EECalQquqY_KcA"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <h5 className="text-light mb-4">Menu</h5>

              <NavLink
                className="btn btn-link"
                to="/"
                onClick={() => window.scrollTo(0, 0)}
              >
                Inicio
              </NavLink>
              <NavLink
                className="btn btn-link"
                to="/estudio"
                onClick={() => window.scrollTo(0, 0)}
              >
                Estudio
              </NavLink>
              <NavLink
                className="btn btn-link"
                to="/clases"
                onClick={() => window.scrollTo(0, 0)}
              >
                Clases
              </NavLink>
              <NavLink
                className="btn btn-link"
                to="/contacto"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contacto
              </NavLink>
              <NavLink
                className="btn btn-link"
                to="/reglamento"
                onClick={() => window.scrollTo(0, 0)}
              >
                Reglamento
              </NavLink>
              <a
                className="btn btn-link"
                href={inscriptionFormUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => window.scrollTo(0, 0)}
              >
                ¡Inscribite Aquí!
              </a>
              <NavLink
                className="btn btn-link d-none"
                to="/shows"
                onClick={() => window.scrollTo(0, 0)}
              >
                Shows
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-3 mb-md-0">
                &copy; <a href="/">Estudio de Danzas Viviana Musso</a>,
                transmitiendo la cultura de la danza desde 1988.
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}

      {/* Whatsapp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5493492566832"
        target="_BLANK"
        rel="noreferrer"
        className="btn btn-lg btn-success btn-lg-square rounded-circle btn-whatsapp"
        style={{ zIndex: 1100 }}
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}

export default Footer;

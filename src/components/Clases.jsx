import React from "react";
import { NavLink } from "react-router-dom";

function Clases() {
  return (
    <div className="container mt-3">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "600px" }}
      >
        <h6
          className="section-title bg-white text-center text-primary px-3"
          id="clases"
        >
          Clases
        </h6>
        <h1 className="display-6 mb-4">Propuesta Académica</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <NavLink
            className="service-item d-block rounded text-center h-100 p-4"
            to="/iniciacion-a-la-danza"
          >
            <img
              loading="lazy"
              className="img-fluid rounded mb-4"
              src="img/iniciacionaladanza.png"
              alt="Iniciación a la Danza"
            />
            <h4 className="mb-0">Iniciación a la Danza</h4>
          </NavLink>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <NavLink
            className="service-item d-block rounded text-center h-100 p-4"
            to="/danza-clasica"
          >
            <img
              loading="lazy"
              className="img-fluid rounded mb-4"
              src="img/danzaclasica.png"
              alt="Danza Clásica"
            />
            <h4 className="mb-0">Danza Clásica - Ballet</h4>
          </NavLink>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <NavLink
            className="service-item d-block rounded text-center h-100 p-4"
            to="/danza-jazz"
          >
            <img
              loading="lazy"
              className="img-fluid rounded mb-4"
              src="img/danzajazz.png"
              alt="Danza Jazz"
            />
            <h4 className="mb-0">Danza Jazz</h4>
          </NavLink>
        </div>
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <NavLink
            className="service-item d-block rounded text-center h-100 p-4"
            to="/profesorado-danza-clasica"
          >
            <img
              loading="lazy"
              className="img-fluid rounded mb-4"
              src="img/profesoradodanzaclasica.png"
              alt="Profesorado Danza Clásica"
            />
            <h4 className="mb-0">Profesorado de Danza Clásica</h4>
          </NavLink>
        </div>
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <NavLink
            className="service-item d-block rounded text-center h-100 p-4"
            to="/profesorado-danza-jazz"
          >
            <img
              loading="lazy"
              className="img-fluid rounded mb-4"
              src="img/profesoradodanzajazz.png"
              alt="Profesorado Danza Jazz"
            />
            <h4 className="mb-0">Profesorado de Danza Jazz</h4>
          </NavLink>
        </div>
        <div
          className="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.5s"
        ></div>
      </div>
    </div>
  );
}

export default Clases;

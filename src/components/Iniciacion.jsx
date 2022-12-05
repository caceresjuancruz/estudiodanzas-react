import React from "react";
import { NavLink } from "react-router-dom";

function Iniciacion() {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            Iniciación a la Danza
          </h1>
        </div>
      </div>
      {/* Page Header End */}

      {/* Feature Start */}
      <NavLink
        className="btn btn-sm btn-light fw-bold m-2 text-muted wow fadeInUp"
        to="/clases"
      >
        〱Atrás
      </NavLink>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  3 a 5 años
                </h6>
                <h1 className="display-6 mb-4">Iniciación a la Danza</h1>
                <p className="mb-4 text-justify">
                  Clases especiales donde se estimula y motiva el sentido del
                  ritmo, la expresión corporal y la motricidad con resultados
                  progresivos. Los niños toman conciencia de las partes del
                  cuerpo, aprenden a reconocerlas y a explorar las posibilidades
                  de movimientos. Se trabaja con las diferentes direcciones:
                  frente, lados, atrás, cortado; velocidades: rapido, lento.
                  Ejercitar su coordinación, desarrollar fuerza y elasticidad a
                  través de ejercicios especificos. Dar oportunidades para
                  expresar estados de ánimo tales como enojo, alegría, miedo o
                  tristeza. También se estimula el oído, aprender diferentes
                  ritmos musicales y reconocer sonidos.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img
                  className="img-fluid"
                  src="img/iniciacionaladanza1.jpg"
                  alt="Iniciación a la Danza"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
      <style jsx="true">
        {`
          .col-lg-6 {
            padding: 0;
          }
          @media (min-width: 992px) {
            .col-lg-6 {
              padding: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Iniciacion;

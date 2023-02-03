import React from "react";
import { NavLink } from "react-router-dom";

function Shows() {
  return (
    <div
      className="container-fluid vw-100 p-2 wow fadeInUp"
      style={{
        display: "table-cell",
        verticalAlign: "middle",
        height: "70vh",
      }}
    >
      <h1 className="text-center mx-0 fw-bold display-1 mt-5 mb-0">
        Funciones - Show 2022
      </h1>
      <h2 className="text-center mb-5 fw-light">
        <u>Fecha:</u> 18/12
      </h2>
      <div
        className="mb-5 mx-auto border rounded-4 px-3"
        style={{ width: "fit-content" }}
      >
        <div className="row">
          <div className="col-12 col-md-6 text-center">
            <NavLink
              className="btn btn-lg btn-primary fw-bold  mx-auto m-3 shadow-lg rounded-4 showBtn"
              to="/shows/funcion-1"
            >
              <p className="display-5 fw-bold mb-0 showBtnTitle">1° Función</p>

              <p className="fw-light mb-0 fs-2">
                <u>Horario:</u> 19:00
              </p>
            </NavLink>
          </div>
          <div className="col-12 col-md-6 text-center">
            <NavLink
              className="btn btn-lg btn-primary fw-bold mx-auto m-3 shadow-lg rounded-4 showBtn"
              to="/shows/funcion-2"
            >
              <p className="display-5 fw-bold mb-0 showBtnTitle">2° Función</p>

              <p className="fw-light mb-0 fs-2">
                <u>Horario:</u> 21:30
              </p>
            </NavLink>
          </div>
        </div>
      </div>
      <style jsx="true">
        {`
          .showBtn {
            width: 15rem;
            height: 10rem;
          }

          .showBtnTitle {
            margin-top: 2rem;
          }

          @media (min-width: 576px) {
            .showBtnTitle {
              margin-top: 0;
            }
          }

          @media (min-width: 768px) {
            .showBtn {
              width: 20rem;
              height: 10rem;
            }
          }

          @media (min-width: 992px) {
            .showBtn {
              width: 30rem;
              height: 15rem;
            }

            .showBtnTitle {
              margin-top: 2.5rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Shows;

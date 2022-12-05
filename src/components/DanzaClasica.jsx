import React from "react";
import { NavLink } from "react-router-dom";

function DanzaClasica() {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            Danza Clásica - Ballet
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
                  a partir de 6 años
                </h6>
                <h1 className="display-6 mb-4">Danza Clásica - Ballet</h1>
                <p className="mb-4 text-justify">
                  La técnica del ballet está conformada por una serie de
                  movimientos estilizados y posiciones que han sido elaboradas y
                  codificadas a través de los años. Todos los bailarines de
                  ballet, sin importar su experiencia o su eficiencia, toman
                  diariamente clase de ballet para mantener sus cuerpos fuertes
                  y flexibles. La mayoría de las clases de ballet inician con el
                  trabajo en la barra. La segunda parte de la clase se realiza
                  sin la ayuda de la barra y se denomina centro. Usualmente se
                  inicia con movimientos lentos y sostenidos (adagio) para
                  desarrollar en los bailarines la sensación de equilibrio y
                  fluidez en los movimientos. Luego vienen los movimientos mas
                  rápidos que incluyen el grupo de los pequeños saltos y
                  progresivamente se realizan pasos con desplazamientos, giros y
                  grandes saltos. La técnica del ballet clásico es
                  universalmente reconocida como una base sólida para la
                  practica de cualquier otra forma dancística. Los principios
                  técnicos adquiridos con la práctica del ballet pueden ser
                  aplicados a cualquier otra forma o estilo. La música
                  predominante en las clases es la música clásica. El bailarín
                  también adquiere formación musical y expresión corporal. La
                  disciplina y estética son características fundamentales, es
                  por eso la importancia del peinado y uniforme para la práctica
                  de esta actividad. La edad recomendada para comenzar con la
                  técnica de danza clásica es a partir de los 6 años.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img
                  className="img-fluid"
                  src="img/danzaclasica1.jpg"
                  alt="Danza Clásica"
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

export default DanzaClasica;

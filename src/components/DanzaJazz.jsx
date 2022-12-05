import React from "react";
import { NavLink } from "react-router-dom";

function DanzaJazz() {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            Danza Jazz
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
                <h1 className="display-6 mb-4">Danza Jazz</h1>
                <p className="mb-4 text-justify">
                  La danza jazz es un estilo único que combina movimientos y
                  técnicas del ballet clásico con pasos de danza contemporánea y
                  se puede bailar con distintos tipos de música. En este estilo,
                  la movilidad del torso es muy importante y la flexibilidad, un
                  elemento muy significativo. El trabajo a tierra, las
                  contracciónes abdominales y la manea característica de salir y
                  entrar al suelo son peculiaridades trascendentales en la danza
                  jazz. Se pueden realizar diferentes estilos como Modern Jazz,
                  Broadway Jazz, Street Jazz, Lyrical Jazz, entre otros, esto
                  hace que sea tan versátil, creativa, divertida y en constante
                  evolución. En las clases se trabaja coordinación,
                  flexibilidad, musicalidad, expresión corporal y percepción
                  espacial entre otras. En las coreografías a desarrollar
                  durante las clases se recorre los diferentes estilos de Danza
                  Jazz. El objetivo de cualquier clase, es poder sentir la danza
                  más libremente y bailar sin restricciones, pero sin dejar de
                  lado el trabajo técnico que tiene que ver con el
                  precalentamiento, parte aeróbica o de resistencia,
                  acondicionamiento del cuerpo y disociación, equilibrio y
                  elongación. Se puede comenzar esta actividad a partir de los 6
                  años.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img
                  className="img-fluid"
                  src="img/danzajazz1.jpg"
                  alt="Danza Jazz"
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

export default DanzaJazz;

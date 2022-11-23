import React from "react";

function ProfesoradoJazz() {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            Profesorado de Danza Jazz
          </h1>
        </div>
      </div>
      {/* Page Header End */}

      {/* Feature Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  Duración 5 años
                </h6>
                <h1 className="display-6 mb-4">Profesorado de Danza Jazz</h1>
                <p className="mb-4 text-justify">
                  El Profesorado de Danza Jazz tiene como objetivo formar
                  profesionales de todos los estilos de la danza jazz. Está
                  orientado a aquellas personas que desean tener una formación
                  integral, para así contar con las herramientas (técnicas,
                  artísticas, pedagógicas, intelectuales) necesarias tanto para
                  el escenario como para el dictado de clases.
                  <br />
                  Descripción: Tendrán seminarios y clases especiales de
                  estilos, historia, pedagogía, etc. de la mano de excelentes
                  profesionales. Su formación en las técnicas de movimiento,
                  según el año en curso, estará complementada con danza clásica,
                  elongación, estilos, y seminarios especiales.
                </p>
                <p>
                  <span className="text-decoration-underline">Duración:</span> 5
                  años
                </p>
                <p>
                  <span className="text-decoration-underline">
                    Requisitos:{" "}
                  </span>
                  <ul>
                    <li>Ser mayor de 12 años</li>
                    <li>
                      Cursar regularmente clases prácticas (2 horas semanales
                      mínimo)
                    </li>
                    <li>
                      Para aquellos que quieran recibir el Diploma de Profesor/a
                      de Danza Jazz, deberán aprobar los exámenes teóricos y
                      prácticos ANUALES con promedio de 6 (seis) en cada una de
                      las materias y tener un 80% de asistencia anual
                    </li>
                    <li>
                      <span className="text-decoration-underline">
                        Diplomas y Certificados:
                      </span>{" "}
                      Son de carácter privado, siendo avalados por la formación
                      y trayectoria de los profesionales que los entregan
                      (Fundación Julio Bocca)
                    </li>
                  </ul>
                </p>
                <p>
                  <span className="text-decoration-underline">
                    Materias teórico-prácticas según el año de cursada:
                  </span>
                  <ul>
                    <li>Historia de la danza</li>
                    <li>Técnica de la danza jazz</li>
                    <li>Estilos</li>
                    <li>Composición Coreográfica</li>
                    <li>Lenguaje Musical y Técnico</li>
                    <li>Anatomía de la danza</li>
                    <li>Pedagogía</li>
                    <li>Planificación de clases</li>
                    <li>Prácticas pedagógicas</li>
                    <li>Entre otras...</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img
                  className="img-fluid"
                  src="img/carousel3.jpg"
                  alt="Profesorado de Danza Jazz"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
    </div>
  );
}

export default ProfesoradoJazz;

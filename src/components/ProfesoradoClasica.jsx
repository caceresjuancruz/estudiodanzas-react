import React from "react";

function ProfesoradoClasica() {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            Profesorado de Danza Clásica
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
                  Duración 11 años
                </h6>
                <h1 className="display-6 mb-4">Profesorado de Danza Clásica</h1>
                <p className="mb-4 text-justify">
                  El Profesorado de Danza Clásica tiene como objetivo formar
                  profesionales. Está orientado a aquellas personas que desean
                  tener una formación integral, para así contar con las
                  herramientas (técnicas, artísticas, pedagógicas,
                  intelectuales) necesarias tanto para el escenario como para el
                  dictado de clases.
                  <br />
                  Descripción: Tendrán seminarios y clases especiales de
                  interpretación musical, armado coreográfico, historia,
                  pedagogía, etc. de la mano de excelentes profesionales.
                </p>
                <p>
                  <span className="text-decoration-underline">Duración:</span>{" "}
                  11 años (preparatorio-1°-2°-3°-4°-5°-6°-7°-8°-9° Y TITULO).
                  Para recibir el Título deberán hacer prácticas pedagógicas y
                  armado coreográfico.
                </p>
                <p>
                  <span className="text-decoration-underline">
                    Requisitos:{" "}
                  </span>
                  <ul>
                    <li>Ser mayor de 7 años</li>
                    <li>
                      Cursar regularmente clases prácticas (2 horas semanales
                      mínimo)
                    </li>
                    <li>
                      Para aquellos que quieran recibir el Diploma de Profesor/a
                      de Danza Clásica, deberán aprobar los exámenes teóricos y
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
                    <li>Técnica de la danza clásica</li>
                    <li>Repertorio</li>
                    <li>Composición Coreográfica</li>
                    <li>Lenguaje Musical y Técnico</li>
                    <li>Anatomía de la danza</li>
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
                  src="img/profesoradodanzaclasica2.png"
                  alt="Profesorado de Danza Clásica"
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

export default ProfesoradoClasica;

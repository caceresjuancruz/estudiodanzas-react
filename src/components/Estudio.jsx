import React from "react";

function Estudio() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      {/* About Start */}

      <div className="container">
        <div className="row g-5 mt-5">
          <div className="col-lg-6 p-2 mt-0 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              Nuestro espacio
            </h6>
            <div
              id="carouselExampleControls"
              className="carousel slide carousel-fade p-1 rounded"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    loading="lazy"
                    src="img/nuestroespacio.jpg"
                    className="d-block w-100 rounded"
                    alt="Nuestro espacio"
                    style={{ height: "300px !important" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    loading="lazy"
                    src="img/salon1.jpg"
                    className="d-block w-100 rounded"
                    alt="Salon"
                    style={{ height: "300px !important" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    loading="lazy"
                    src="img/salon2.jpg"
                    className="d-block w-100 rounded"
                    alt="Salon 2"
                    style={{ height: "300px !important" }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon w-25"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon w-25"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-lg-6 p-2 mt-0 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h1 className="display-6 mb-4">
                <span className="text-primary">{year - 1988} años</span> de
                trayectoria
              </h1>
              <p>
                Desde 1988 el Estudio de Danzas Viviana Musso, ubicado en la
                ciudad de Rafaela, se caracteriza por brindar sólida formación
                artística en técnicas de la danza. El espacio cuenta con dos
                salones totalmente equipados, escenario y vestuarios.
              </p>
              <p className="mb-4">
                El año académico abarca desde marzo a diciembre, y en los meses
                de enero y febrero se realizan talleres y seminarios de verano.
                Las clases se dividen por niveles y edades que abarcan desde los
                3 años y sin límite de edad. Se realizan dos Shows anuales donde
                el alumnado muestra el trabajo realizado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About End */}

      {/* Estudio Start */}

      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 p-2 wow fadeInUp" data-wow-delay="0.1s">
            <div className="h-100">
              <h6
                className="section-title bg-white text-start text-primary pe-3"
                id="estudio"
              >
                ESTUDIO HOMOLOGADO
              </h6>
              <h1 className="display-6 mb-4">Fundación Julio Bocca</h1>
              <p className="mb-4">
                "La fundación con este proyecto pretende acortar las distancias
                con clases de revisión, videoconferencias mensuales, y clases de
                actualización a su núcleo de estudios seleccionados que amparan
                un grupo de alumnos monitoreados por nuestros maestros
                ayudándoles así a formar parte de una filosofía académica y de
                excelencia de nuestra Fundación Julio Bocca, sin precedentes"
              </p>
              <p className="mb-4">
                Confirmar, ratificar, rectificar y certificar el nivel del un
                alumno es parte del proyecto en sí, pero el contacto a la
                distancia, la acción motivadora que genera una institución como
                la nuestra investigando las necesidades de los profesionales
                dispersos en toda Latinoamérica nos lleva a pensar que el
                proyecto es mucho más inclusivo y excelente de lo que aspira.
              </p>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp my-auto" data-wow-delay="0.1s">
            <img
              loading="lazy"
              className="img-fluid"
              id="homologado"
              src="img/HOMOLOGADO.png"
              alt="Estudio Homologado por Fundacion Julio Bocca"
            />
          </div>
        </div>
      </div>

      {/* Directora Start */}
      <div
        className="container container-directora my-5 wow fadeInUp p-0"
        data-wow-delay="0.1s"
      >
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="display-6 mb-4">Directora</h1>
        </div>
        <div className="container text-center">
          <img
            loading="lazy"
            className="img-fluid rounded-circle p-1 mb-4"
            id="directora-img"
            src="img/vivianamussoperfil.png"
            alt="Directora"
          />
          <h5 className="directora-titulo">Viviana Musso</h5>
          <span className="directora-subtitulo fst-italic text-primary">
            Fundadora - Directora
          </span>
          <div className="dropdown">
            <button
              className="btn-directora-drop dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="collapse"
              data-bs-target="#directoraCollapse"
            ></button>
            <div
              className="dropdown-menu collapse p-4 m-0 border-0 text-muted"
              style={{ width: "auto" }}
              id="directoraCollapse"
            >
              <p className="directora-texto text-start">
                Comienza sus estudios de Danza Clásica a la edad de 6 años en la
                Escuela de Danzas de Zulema Pujatto en Rafaela. Concretando los
                10 años del Profesorado con la examinadora Beatriz Moscheni
                (bailarina y maestra del Teatro Colón). A partir de entonces se
                incorpora al grupo de apoyo de la maestra Zulema Pujatto, dando
                clases en su estudio.
              </p>
              <p className="directora-texto text-start">
                A los 13 años comienza una actividad paralela incorporándose al
                Grupo de Expresión Corporal de la Escuela Nac. de Comercio, bajo
                la dirección de Toti Borda Bossana. Una modalidad que en ese
                entonces era una introducción a la danza jazz. En este período
                realiza distintos cursos de perfeccionamiento en Santa Fe,
                Rosario, Corrientes, Concordia y Buenos Aires, participando
                también de Encuentros de Danza en calidad de bailarina
                intérprete.
              </p>
              <p className="directora-texto text-start">
                A los 18 años se radica en Buenos Aires para perfeccionarse y
                asiste regularmente al Estudio de danzas de Noemí Coelho y
                Rodolfo Olguín y al estudio de danzas de Beatriz Moscheni. En
                constante vanguardia y sumando todas las herramientas necesarias
                para perfeccionarse como docente realizó cursos, seminarios y
                congresos tomando clases con los mejores maestros del país entre
                ellos: Laura Roatta, Margarita Fernández, Manuel Vallejos,
                Adolfo Colque, Liliana Belfiore, Paula Padula, Norma Binaghi,
                Mario Giromini Drozz, Raúl Candhal, Silvia Briem Stamm, Teresa
                Duggan, Gustavo Zajac, Juan Virasoro, Marcela Ávila, Ricky
                Pashkus, Patricia Sánchez, Maximiliano Guerra, Cecilia Figaredo,
                Raquel Rossetti entre otros. También sumó clases de
                perfeccionamiento con maestros de renombre internacional como
                Rosemary Neri Calherios (Brasil), Patricia Stokoe, Richard
                Pierlom (USA), Miguel Gómez (Cuba), Mario Nacimiento (Brasil),
                Nathan Trice (USA), Alicia Díaz (USA) entre otros.
              </p>
              <p className="directora-texto text-start">
                En 1988 abre su propio Estudio de Danzas y comienza su actividad
                como docente y coreógrafa en danza Clásica y danza Jazz formando
                bailarines en forma ininterrumpida hasta el día de hoy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Directora End */}

      {/* Estudio End */}
      <style jsx="true">
        {`
          @media (min-width: 992px) {
            #carouselExampleControls {
              margin-right: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Estudio;

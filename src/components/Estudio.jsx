import React from "react";

function Estudio() {
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
                <span className="text-primary">34 a??os</span> de trayectoria
              </h1>
              <p>
                Desde 1988 el Estudio de Danzas Viviana Musso, ubicado en la
                ciudad de Rafaela, se caracteriza por brindar s??lida formaci??n
                art??stica en t??cnicas de la danza. El espacio cuenta con dos
                salones totalmente equipados, escenario y vestuarios.
              </p>
              <p className="mb-4">
                El a??o acad??mico abarca desde marzo a diciembre, y en los meses
                de enero y febrero se realizan talleres y seminarios de verano.
                Las clases se dividen por niveles y edades que abarcan desde los
                3 a??os y sin l??mite de edad. Se realizan dos Shows anuales donde
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
              <h1 className="display-6 mb-4">Fundaci??n Julio Bocca</h1>
              <p className="mb-4">
                "La fundaci??n con este proyecto pretende acortar las distancias
                con clases de revisi??n, videoconferencias mensuales, y clases de
                actualizaci??n a su n??cleo de estudios seleccionados que amparan
                un grupo de alumnos monitoreados por nuestros maestros
                ayud??ndoles as?? a formar parte de una filosof??a acad??mica y de
                excelencia de nuestra Fundaci??n Julio Bocca, sin precedentes"
              </p>
              <p className="mb-4">
                Confirmar, ratificar, rectificar y certificar el nivel del un
                alumno es parte del proyecto en s??, pero el contacto a la
                distancia, la acci??n motivadora que genera una instituci??n como
                la nuestra investigando las necesidades de los profesionales
                dispersos en toda Latinoam??rica nos lleva a pensar que el
                proyecto es mucho m??s inclusivo y excelente de lo que aspira.
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
                Comienza sus estudios de Danza Cl??sica a la edad de 6 a??os en la
                Escuela de Danzas de Zulema Pujatto en Rafaela. Concretando los
                10 a??os del Profesorado con la examinadora Beatriz Moscheni
                (bailarina y maestra del Teatro Col??n). A partir de entonces se
                incorpora al grupo de apoyo de la maestra Zulema Pujatto, dando
                clases en su estudio.
              </p>
              <p className="directora-texto text-start">
                A los 13 a??os comienza una actividad paralela incorpor??ndose al
                Grupo de Expresi??n Corporal de la Escuela Nac. de Comercio, bajo
                la direcci??n de Toti Borda Bossana. Una modalidad que en ese
                entonces era una introducci??n a la danza jazz. En este per??odo
                realiza distintos cursos de perfeccionamiento en Santa Fe,
                Rosario, Corrientes, Concordia y Buenos Aires, participando
                tambi??n de Encuentros de Danza en calidad de bailarina
                int??rprete.
              </p>
              <p className="directora-texto text-start">
                A los 18 a??os se radica en Buenos Aires para perfeccionarse y
                asiste regularmente al Estudio de danzas de Noem?? Coelho y
                Rodolfo Olgu??n y al estudio de danzas de Beatriz Moscheni. En
                constante vanguardia y sumando todas las herramientas necesarias
                para perfeccionarse como docente realiz?? cursos, seminarios y
                congresos tomando clases con los mejores maestros del pa??s entre
                ellos: Laura Roatta, Margarita Fern??ndez, Manuel Vallejos,
                Adolfo Colque, Liliana Belfiore, Paula Padula, Norma Binaghi,
                Mario Giromini Drozz, Ra??l Candhal, Silvia Briem Stamm, Teresa
                Duggan, Gustavo Zajac, Juan Virasoro, Marcela ??vila, Ricky
                Pashkus, Patricia S??nchez, Maximiliano Guerra, Cecilia Figaredo,
                Raquel Rossetti entre otros. Tambi??n sum?? clases de
                perfeccionamiento con maestros de renombre internacional como
                Rosemary Neri Calherios (Brasil), Patricia Stokoe, Richard
                Pierlom (USA), Miguel G??mez (Cuba), Mario Nacimiento (Brasil),
                Nathan Trice (USA), Alicia D??az (USA) entre otros.
              </p>
              <p className="directora-texto text-start">
                En 1988 abre su propio Estudio de Danzas y comienza su actividad
                como docente y core??grafa en danza Cl??sica y danza Jazz formando
                bailarines en forma ininterrumpida hasta el d??a de hoy.
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

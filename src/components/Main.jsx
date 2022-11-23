import React from "react";
import Clases from "./Clases";
import Estudio from "./Estudio";

function Main() {
  return (
    <div>
      {/* Carousel Start */}
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                loading="lazy"
                className="w-100"
                src="img/carousel1.jpg"
                alt="Carousel 1"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text1 text-white text-uppercase animated zoomIn">
                    Estudio de Danzas
                  </h4>
                  <h1 className="display-1 text-white text-uppercase animated zoomIn">
                    Viviana Musso
                  </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                className="w-100"
                src="img/carousel2.jpg"
                alt="Carousel 2"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text1 text-white text-uppercase animated zoomIn">
                    Estudio de Danzas
                  </h4>
                  <h1 className="display-1 text-white text-uppercase animated zoomIn">
                    Viviana Musso
                  </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                className="w-100"
                src="img/carousel3.jpg"
                alt="Carousel 3"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text1 text-white text-uppercase animated zoomIn">
                    Estudio de Danzas
                  </h4>
                  <h1 className="display-1 text-white text-uppercase animated zoomIn">
                    Viviana Musso
                  </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                loading="lazy"
                className="w-100"
                src="img/carousel4.jpg"
                alt="Carousel 4"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text1 text-white text-uppercase animated zoomIn">
                    Estudio de Danzas
                  </h4>
                  <h1 className="display-1 text-white text-uppercase animated zoomIn">
                    Viviana Musso
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}

      <Estudio />

      <Clases />

      {/* Video Start */}
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-12 col-md-4 p-2 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="ratio ratio-16x9">
              <iframe
                className="rounded"
                loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vPk7uaSzVNw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div
            className="col-12 col-md-4 p-2 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="ratio ratio-16x9">
              <iframe
                className="rounded"
                loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tNlCbguRl1k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div
            className="col-12 col-md-4 p-2 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="ratio ratio-16x9">
              <iframe
                className="rounded"
                loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/r6v1LdLLvIg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Video End */}

      {/* Slider final Start */}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f14835"
          fillOpacity="1"
          d="M0,320L1440,288L1440,320L0,320Z"
        ></path>
      </svg>
      <section className="home">
        <div className="container-slider-section pt-3">
          <div className="home-text">
            <p className="animate-text">
              <span>Clases</span>
              <span>Shows</span>
              <span>Seminarios</span>
              <span>Profesorados</span>
            </p>
          </div>
        </div>
      </section>

      <div className="container-wave pt-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          ></div>
          <div className="container-fluid pb-5 wow fadeInUp">
            <div className="row">
              <div className="col-12 m-auto">
                <div className="owl-carousel owl-theme">
                  <div className="item mb-4">
                    <div className="card border-0 shadow">
                      <img
                        loading="lazy"
                        src="img/owl-carousel1.png"
                        alt="Carousel 1"
                        className="card-img-top"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="card border-0 shadow">
                      <img
                        loading="lazy"
                        src="img/owl-carousel2.png"
                        alt="Carousel 2"
                        className="card-img-top"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="card border-0 shadow">
                      <img
                        loading="lazy"
                        src="img/owl-carousel4.png"
                        alt="Carousel 3"
                        className="card-img-top"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="card border-0 shadow">
                      <img
                        loading="lazy"
                        src="img/owl-carousel5.png"
                        alt="Carousel 4"
                        className="card-img-top"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="card border-0 shadow">
                      <img
                        loading="lazy"
                        src="img/owl-carousel6.jpg"
                        alt="Carousel 5"
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider final End */}
    </div>
  );
}

export default Main;

import React from "react";

function Page404() {
  return (
    <div>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="mb-4">Página no disponible</h1>
              <a className="btn btn-primary rounded-pill py-3 px-5" href="/">
                Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;

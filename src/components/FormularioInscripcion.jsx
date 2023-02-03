import React from "react";

function FormularioInscripcion() {
  return (
    <div className="container-fluid formulario-container">
      <div>
        <h1 className="display-2">Formulario de inscripción 2023</h1>

        <div className="contact-us text-dark">
          <div className="container p-0">
            <div className="contact-form">
              <div className="row ">
                <div className="col-md-12">
                  <br />
                  <small className="text-muted">
                    <strong>*</strong> Campos requeridos.
                  </small>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-7">
                  <form
                    id="ajax-contact"
                    method="post"
                    action="contact-form-mail.php"
                  >
                    <div className="messages" id="form-messages"></div>
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="fw-bold" htmlFor="form_name">
                              Nombre Alumna/o *
                            </label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Nombre requerido"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="fw-bold" htmlFor="form_lastname">
                              Apellido Alumna/o *
                            </label>
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Apellido requerido"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="fw-bold" htmlFor="form_email">
                              Email *
                            </label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Email válido requerido"
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="fw-bold" htmlFor="form_phone">
                              Cel. Alumna/o*
                            </label>
                            <input
                              id="form_phone"
                              type="tel"
                              name="phone"
                              className="form-control"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="fw-bold" htmlFor="form_message">
                              Observaciones físicas, psíquicas, alergias: *
                            </label>
                            <textarea
                              id="form_message"
                              name="message"
                              className="form-control"
                              placeholder=""
                              rows="4"
                              data-error=""
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12 text-center">
                          <input
                            type="submit"
                            className="btn btn-primary text-light fw-light mt-3 fs-2 rounded-5 px-4"
                            value="Inscribirme"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">
        {`
          .formulario-container {
            padding: 1rem;
          }

          @media (min-width: 992px) {
            .formulario-container {
              padding: 3rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default FormularioInscripcion;

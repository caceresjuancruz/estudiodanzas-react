import React, { useState } from "react";
import axios from "axios";

function FormularioInscripcion() {
  const [formValue, setFormValue] = useState({
    dni: "",
    nombreAlumna: "",
    apellidoAlumna: "",
    domicilioAlumna: "",
    barrioAlumna: "",
    celularAlumna: "",
    fechaNacimiento: "",
    edad: "",
    obraSocial: "",
    idGrupoSanguineo: "",
    observaciones: "",
    nombreMadre: "",
    direccionMadre: "",
    celularMadre: "",
    mailMadre: "",
    nombrePadre: "",
    direccionPadre: "",
    celularPadre: "",
    mailPadre: "",
    idDisciplina: "",
    añoComienzo: "",
    emergenciaAvisarA: "",
    emergenciaTel: "",
    emergenciaCel: "",
    emergenciaParentesco: "",
  });

  const sumbitForm = async (e) => {
    e.preventDefault();

    document.getElementById("submitButton").value = "Enviando...";
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://estudiodedanzasvivianamussobackend.onrender.com/inscripcion",
        data: formValue,
        headers: { "Content-Type": "application/json" },
      });
      // handle success

      if (response.data.affectedRows === 1) {
        document.getElementById("textSuccess").style.display = "inline";
        document.getElementById("textError").style.display = "none";
        document.getElementById("submitButton").style.backgroundColor = "green";
        document.getElementById("submitButton").value = "Inscripción éxitosa ✓";
        setTimeout(() => {
          document.getElementById("submitButton").style.backgroundColor =
            "#f14835";
          document.getElementById("submitButton").value = "Enviar inscripción";
        }, 3000);

        setTimeout(() => {
          document.getElementById("textSuccess").style.display = "none";
        }, 10000);

        setFormValue({
          dni: "",
          nombreAlumna: "",
          apellidoAlumna: "",
          domicilioAlumna: "",
          barrioAlumna: "",
          celularAlumna: "",
          fechaNacimiento: "",
          edad: "",
          obraSocial: "",
          idGrupoSanguineo: "",
          observaciones: "",
          nombreMadre: "",
          direccionMadre: "",
          celularMadre: "",
          mailMadre: "",
          nombrePadre: "",
          direccionPadre: "",
          celularPadre: "",
          mailPadre: "",
          idDisciplina: "",
          añoComienzo: "",
          emergenciaAvisarA: "",
          emergenciaTel: "",
          emergenciaCel: "",
          emergenciaParentesco: "",
        });
      }
    } catch (error) {
      document.getElementById("textError").style.display = "inline";
      document.getElementById("textSuccess").style.display = "none";
      document.getElementById("submitButton").style.backgroundColor = "red";
      document.getElementById("submitButton").value = "Error ✕";
      setTimeout(() => {
        document.getElementById("submitButton").style.backgroundColor =
          "#f14835";
        document.getElementById("submitButton").value = "Enviar inscripción";
      }, 3000);

      setTimeout(() => {
        document.getElementById("textError").style.display = "none";
      }, 10000);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="container-fluid px-1 px-lg-5 formulario-container mb-5">
      <div>
        <h1 className="display-2 border-bottom">
          FORMULARIO DE INSCRIPCIÓN 2023
        </h1>

        <div className="contact-us text-dark">
          <div className="container p-0">
            <div className="contact-form bg-light px-lg-5 px-2 pb-5 rounded-2">
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
                    onSubmit={sumbitForm}
                    method="post"
                    id="inscripcionForm"
                  >
                    <div className="messages" id="form-messages"></div>
                    <div className="controls">
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="" htmlFor="nombreAlumna">
                              Nombre Alumna/o *
                            </label>
                            <input
                              id="nombreAlumna"
                              type="text"
                              name="nombreAlumna"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Nombre requerido"
                              value={formValue.nombreAlumna}
                              onChange={(e) => onChangeHandler(e.target)}
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="" htmlFor="apellidoAlumna">
                              Apellido Alumna/o *
                            </label>
                            <input
                              id="apellidoAlumna"
                              type="text"
                              name="apellidoAlumna"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Apellido requerido"
                              value={formValue.apellidoAlumna}
                              onChange={(e) => onChangeHandler(e.target)}
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="" htmlFor="domicilioAlumna">
                              Domicilio *
                            </label>
                            <input
                              id="domicilioAlumna"
                              type="text"
                              name="domicilioAlumna"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Domicilio requerido"
                              value={formValue.domicilioAlumna}
                              onChange={(e) => onChangeHandler(e.target)}
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="" htmlFor="barrioAlumna">
                              Barrio *
                            </label>
                            <input
                              id="barrioAlumna"
                              type="text"
                              name="barrioAlumna"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Barrio requerido"
                              value={formValue.barrioAlumna}
                              onChange={(e) => onChangeHandler(e.target)}
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="" htmlFor="celularAlumna">
                              Celular *
                            </label>
                            <input
                              id="celularAlumna"
                              type="text"
                              name="celularAlumna"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Celular requerido"
                              value={formValue.celularAlumna}
                              onChange={(e) => onChangeHandler(e.target)}
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="" htmlFor="fechaNacimiento">
                              Fecha Nacimiento *
                            </label>
                            <input
                              id="fechaNacimiento"
                              type="date"
                              name="fechaNacimiento"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Fecha de nacimiento requerida"
                              value={formValue.fechaNacimiento}
                              onChange={(e) => onChangeHandler(e.target)}
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="" htmlFor="dni">
                              DNI *
                            </label>
                            <input
                              id="dni"
                              type="text"
                              name="dni"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="DNI requerido"
                              value={formValue.dni}
                              onChange={(e) => onChangeHandler(e.target)}
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="" htmlFor="edad">
                              Edad *
                            </label>
                            <input
                              id="edad"
                              type="number"
                              min="0"
                              max="100"
                              name="edad"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Edad requerida"
                              value={formValue.edad}
                              onChange={(e) => onChangeHandler(e.target)}
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="" htmlFor="obraSocial">
                              Obra Social *
                            </label>
                            <input
                              id="obraSocial"
                              type="text"
                              name="obraSocial"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Obra Social requerida"
                              value={formValue.obraSocial}
                              onChange={(e) => onChangeHandler(e.target)}
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group ">
                            <label className="" htmlFor="idGrupoSanguineo">
                              Grupo Sanguineo *
                            </label>
                            <select
                              id="idGrupoSanguineo"
                              name="idGrupoSanguineo"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Grupo Sanguineo requerido"
                              value={formValue.idGrupoSanguineo}
                              onChange={(e) => onChangeHandler(e.target)}
                            >
                              <option value="0">Seleccionar...</option>
                              <option value="1">A+</option>
                              <option value="2">A-</option>
                              <option value="3">B+</option>
                              <option value="4">B-</option>
                              <option value="5">AB+</option>
                              <option value="6">AB-</option>
                              <option value="7">O+</option>
                              <option value="8">O-</option>
                            </select>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="" htmlFor="observaciones">
                              Observaciones físicas, psíquicas, alergias:
                            </label>
                            <textarea
                              id="observaciones"
                              name="observaciones"
                              className="form-control"
                              placeholder=""
                              rows="4"
                              data-error=""
                              value={formValue.observaciones}
                              onChange={(e) => onChangeHandler(e.target)}
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 border rounded-3 p-2">
                        <div className="row mt-2">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="nombreMadre">
                                Nombre de Madre
                              </label>
                              <input
                                id="nombreMadre"
                                type="text"
                                name="nombreMadre"
                                className="form-control"
                                placeholder=""
                                value={formValue.nombreMadre}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="direccionMadre">
                                Direccion
                              </label>
                              <input
                                id="direccionMadre"
                                type="text"
                                name="direccionMadre"
                                className="form-control"
                                placeholder=""
                                value={formValue.direccionMadre}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="celularMadre">
                                Celular de Madre
                              </label>
                              <input
                                id="celularMadre"
                                type="text"
                                name="celularMadre"
                                className="form-control"
                                placeholder=""
                                value={formValue.celularMadre}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="mailMadre">
                                Mail de Madre
                              </label>
                              <input
                                id="mailMadre"
                                type="email"
                                name="mailMadre"
                                className="form-control"
                                placeholder=""
                                value={formValue.mailMadre}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 border rounded-3 p-2">
                        <div className="row mt-2">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="nombrePadre">
                                Nombre de Padre
                              </label>
                              <input
                                id="nombrePadre"
                                type="text"
                                name="nombrePadre"
                                className="form-control"
                                placeholder=""
                                value={formValue.nombrePadre}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="direccionPadre">
                                Direccion
                              </label>
                              <input
                                id="direccionPadre"
                                type="text"
                                name="direccionPadre"
                                className="form-control"
                                placeholder=""
                                value={formValue.direccionPadre}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="celularPadre">
                                Celular de Padre
                              </label>
                              <input
                                id="celularPadre"
                                type="text"
                                name="celularPadre"
                                className="form-control"
                                placeholder=""
                                value={formValue.celularPadre}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="mailPadre">
                                Mail de Padre
                              </label>
                              <input
                                id="mailPadre"
                                type="email"
                                name="mailPadre"
                                className="form-control"
                                placeholder=""
                                value={formValue.mailPadre}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 border rounded-3 p-2">
                        <div className="row mt-2">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="emergenciaAvisarA">
                                En caso de emergencia avisar a: *
                              </label>
                              <input
                                id="emergenciaAvisarA"
                                type="text"
                                name="emergenciaAvisarA"
                                className="form-control"
                                placeholder=""
                                required="required"
                                data-error="Campo requerido"
                                value={formValue.emergenciaAvisarA}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="emergenciaTel">
                                Telefono
                              </label>
                              <input
                                id="emergenciaTel"
                                type="text"
                                name="emergenciaTel"
                                className="form-control"
                                placeholder=""
                                value={formValue.emergenciaTel}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="" htmlFor="emergenciaCel">
                                Celular *
                              </label>
                              <input
                                id="emergenciaCel"
                                type="text"
                                name="emergenciaCel"
                                className="form-control"
                                placeholder=""
                                required="required"
                                data-error="Celular requerido"
                                value={formValue.emergenciaCel}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                className=""
                                htmlFor="emergenciaParentesco"
                              >
                                Parentesco *
                              </label>
                              <input
                                id="emergenciaParentesco"
                                type="text"
                                name="emergenciaParentesco"
                                className="form-control"
                                placeholder=""
                                required="required"
                                data-error="Parentesco requerido"
                                value={formValue.emergenciaParentesco}
                                onChange={(e) => onChangeHandler(e.target)}
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="" htmlFor="idDisciplina">
                              Disciplina que cursa *
                            </label>
                            <select
                              id="idDisciplina"
                              name="idDisciplina"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Disciplina requerida"
                              value={formValue.idDisciplina}
                              onChange={(e) => onChangeHandler(e.target)}
                            >
                              <option value="0">Seleccionar...</option>
                              <option value="1">Danza Clásica</option>
                              <option value="2">Danza Jazz</option>
                              <option value="3">Urbano</option>
                            </select>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="" htmlFor="añoComienzo">
                              Año de comienzo *
                            </label>
                            <input
                              id="añoComienzo"
                              type="number"
                              min="1900"
                              max="2099"
                              name="añoComienzo"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Año de comienzo requerido"
                              value={formValue.añoComienzo}
                              onChange={(e) => onChangeHandler(e.target)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 text-center">
                          <input
                            type="submit"
                            id="submitButton"
                            className="btn btn-primary text-light fw-light mt-4 fs-2 rounded-5 px-4"
                            value="Enviar inscripción"
                            style={{ minWidth: "300px" }}
                          />
                        </div>
                        <small
                          id="textSuccess"
                          className="text-success text-center mt-3"
                          style={{ display: "none" }}
                        >
                          * Inscripción exitosa *
                        </small>
                        <small
                          id="textError"
                          className="text-danger text-center mt-3"
                          style={{ display: "none" }}
                        >
                          * Error en la Inscripción *
                        </small>
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

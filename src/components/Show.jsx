import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";
import { Fragment } from "react";

function Show() {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_eyi8ogc",
        "template_k9gw58m",
        form.current,
        "murfl-Ep5p2hKjHrh"
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [isLoading, setIsLoading] = useState(true);
  const [arrayPlateaBaja, setArrayPlateaBaja] = useState([]);
  const [arrayPlateaAlta, setArrayPlateaAlta] = useState([]);
  const cantidadFilasPlateaBaja = [];
  const cantidadFilasPlateaAlta = [];
  for (let i = 0; i < 18; i++) {
    cantidadFilasPlateaBaja.push(i + 1);
  }
  for (let i = 0; i < 8; i++) {
    cantidadFilasPlateaAlta.push(i + 1);
  }

  let [cantidadMisButacas, setCantidadMisButacas] = useState(0);
  let [butacaSeleccionadasPlateaBaja, setButacaSeleccionadasPlateaBaja] =
    useState([]);

  let [butacaSeleccionadasPlateaAlta, setButacaSeleccionadasPlateaAlta] =
    useState([]);

  const [codigo, setCodigo] = useState("");

  const [triggerCodigoError, setTriggerCodigoError] = useState(false);
  const [triggerCodigoSuccess, setTriggerCodigoSuccess] = useState(false);

  const [triggerConfirmError, setTriggerConfirmError] = useState(false);
  const [triggerConfirmSuccess, setTriggerConfirmSuccess] = useState(false);

  const [triggerConfirmErrorOccupated, setTriggerConfirmErrorOccupated] =
    useState(false);

  useEffect(() => {
    if (codigo !== "") {
      axios
        .post(
          "https://estudio-backend-production.up.railway.app/verificar-codigo",
          {
            codigo: Number(codigo),
          }
        )
        .then(function (response) {
          if (response.data.length !== 0) {
            setCantidadMisButacas(
              cantidadMisButacas + response.data[0].cantidad_butacas
            );

            //e.target.reset();
            setTriggerCodigoSuccess(true);
            setTimeout(() => {
              setTriggerCodigoSuccess(false);
              setCodigo("");
            }, 2500);
          } else {
            setTriggerCodigoError(true);
            setTimeout(() => setTriggerCodigoError(false), 2500);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, [codigo]);

  function handleCodigo(e) {
    e.preventDefault();
    setCodigo(e.target.code.value);
  }

  function handleConfirmarUbicacion(e) {
    e.preventDefault();

    if (butacaSeleccionadasPlateaBaja.length > 0) {
      const butacasParaVerificar = butacaSeleccionadasPlateaBaja.map(
        (butaca) => {
          return { fila: butaca.fila, butaca: butaca.butaca };
        }
      );

      axios
        .post(
          "https://estudio-backend-production.up.railway.app/verificar-butacas-platea-baja",
          {
            butacas: butacasParaVerificar,
          }
        )
        .then(function (response) {
          if (response.data.result) {
            axios
              .post(
                "http://localhost:8000/actualizar-ubicaciones-platea-baja",
                {
                  ubicaciones: butacaSeleccionadasPlateaBaja,
                  email: e.target.user_email.value,
                  nombre: e.target.user_nombre.value,
                }
              )
              .then(function (response) {
                if (
                  response.data.result === false ||
                  butacaSeleccionadasPlateaBaja.length === 0
                ) {
                  setTriggerConfirmError(true);
                  setTimeout(() => setTriggerConfirmError(false), 2500);
                } else {
                  setButacaSeleccionadasPlateaBaja([]);

                  setTriggerConfirmSuccess(true);
                  document.getElementById("alerta").style.display =
                    "inline-block";
                  window.scrollTo(0, document.body.scrollHeight);
                  sendEmail();
                  e.target.reset();
                  setTimeout(() => setTriggerConfirmSuccess(false), 2500);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            setTriggerConfirmErrorOccupated(true);
            setTimeout(() => {
              setTriggerConfirmErrorOccupated(false);
            }, 2000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (butacaSeleccionadasPlateaAlta.length > 0) {
      const butacasParaVerificar = butacaSeleccionadasPlateaAlta.map(
        (butaca) => {
          return { fila: butaca.fila, butaca: butaca.butaca };
        }
      );

      axios
        .post(
          "https://estudio-backend-production.up.railway.app/verificar-butacas-platea-alta",
          {
            butacas: butacasParaVerificar,
          }
        )
        .then(function (response) {
          if (response.data.result) {
            axios
              .post(
                "https://estudio-backend-production.up.railway.app/actualizar-ubicaciones-platea-alta",
                {
                  ubicaciones: butacaSeleccionadasPlateaAlta,
                  email: e.target.user_email.value,
                  nombre: e.target.user_nombre.value,
                }
              )
              .then(function (response) {
                if (
                  response.data === [] ||
                  butacaSeleccionadasPlateaAlta.length === 0
                ) {
                  setTriggerConfirmError(true);
                  setTimeout(() => setTriggerConfirmError(false), 2500);
                } else {
                  setButacaSeleccionadasPlateaAlta([]);

                  setTriggerConfirmSuccess(true);
                  document.getElementById("alerta").style.display =
                    "inline-block";
                  window.scrollTo(0, document.body.scrollHeight);
                  sendEmail();
                  e.target.reset();
                  setTimeout(() => setTriggerConfirmSuccess(false), 2500);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            setTriggerConfirmErrorOccupated(true);
            setTimeout(() => {
              setTriggerConfirmErrorOccupated(false);
            }, 2000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function selectedBackground(butaca) {
    return butaca.disponible === 1 ? "#2fba44" : "#dc3545";
  }

  function handleSelectedButaca(event, butaca) {
    //rgb(47, 186, 68) - GREEN
    //rgb(13, 202, 240) - LIGHTBLUE

    if (
      butaca.disponible === 1 &&
      (cantidadMisButacas > 0 ||
        butacaSeleccionadasPlateaBaja.length > 0 ||
        butacaSeleccionadasPlateaAlta.length > 0)
    ) {
      if (
        event.target.style.backgroundColor === "rgb(47, 186, 68)" &&
        cantidadMisButacas > 0
      ) {
        setButacaSeleccionadasPlateaBaja((butacaSeleccionadasPlateaBaja) => [
          ...butacaSeleccionadasPlateaBaja,
          butaca,
        ]);

        setCantidadMisButacas(cantidadMisButacas - 1);
      }

      if (
        event.target.style.backgroundColor === "rgb(13, 202, 240)" &&
        (butacaSeleccionadasPlateaBaja.length > 0 ||
          butacaSeleccionadasPlateaAlta.length > 0)
      ) {
        let index = butacaSeleccionadasPlateaBaja.indexOf(butaca);
        setButacaSeleccionadasPlateaBaja((butacaSeleccionadas) =>
          butacaSeleccionadas.filter((e) => e !== butacaSeleccionadas[index])
        );

        setCantidadMisButacas(cantidadMisButacas + 1);
      }

      event.target.style.backgroundColor =
        event.target.style.backgroundColor === "rgb(47, 186, 68)" &&
        cantidadMisButacas > 0
          ? "#0DCAF0"
          : "#2FBA44";
    }
  }

  function handleSelectedButacaPlateaAlta(event, butaca) {
    //rgb(47, 186, 68) - GREEN
    //rgb(13, 202, 240) - LIGHTBLUE

    if (
      butaca.disponible === 1 &&
      (cantidadMisButacas > 0 ||
        butacaSeleccionadasPlateaAlta.length > 0 ||
        butacaSeleccionadasPlateaBaja.length > 0)
    ) {
      if (
        event.target.style.backgroundColor === "rgb(47, 186, 68)" &&
        cantidadMisButacas > 0
      ) {
        setButacaSeleccionadasPlateaAlta((butacaSeleccionadasPlateaAlta) => [
          ...butacaSeleccionadasPlateaAlta,
          butaca,
        ]);

        setCantidadMisButacas(cantidadMisButacas - 1);
      }

      if (
        event.target.style.backgroundColor === "rgb(13, 202, 240)" &&
        (butacaSeleccionadasPlateaAlta.length > 0 ||
          butacaSeleccionadasPlateaBaja.length > 0)
      ) {
        let index = butacaSeleccionadasPlateaAlta.indexOf(butaca);
        setButacaSeleccionadasPlateaAlta((butacaSeleccionadas) =>
          butacaSeleccionadas.filter((e) => e !== butacaSeleccionadas[index])
        );

        setCantidadMisButacas(cantidadMisButacas + 1);
      }

      event.target.style.backgroundColor =
        event.target.style.backgroundColor === "rgb(47, 186, 68)" &&
        cantidadMisButacas > 0
          ? "#0DCAF0"
          : "#2FBA44";
    }
  }

  // setInterval(() => {
  //   fetch(
  //     "https://estudio-backend-production.up.railway.app/butacas-platea-baja",
  //
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setArrayPlateaBaja(data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  //   fetch(
  //     "https://estudio-backend-production.up.railway.app/butacas-platea-alta",
  //
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setArrayPlateaAlta(data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   setIsLoading(false);
  // }, 30000);

  useEffect(() => {
    fetch(
      "https://estudio-backend-production.up.railway.app/butacas-platea-baja"
    )
      .then((response) => response.json())
      .then((data) => {
        setArrayPlateaBaja(data);
      })
      .catch(function (error) {
        console.log(error);
      });

    fetch(
      "https://estudio-backend-production.up.railway.app/butacas-platea-alta"
    )
      .then((response) => response.json())
      .then((data) => {
        setArrayPlateaAlta(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsLoading(false);
  }, [
    triggerConfirmSuccess,
    triggerConfirmErrorOccupated,
    triggerConfirmError,
    codigo,
    cantidadMisButacas,
  ]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container py-3 px-1">
      <NavLink className="btn btn-sm btn-light text-muted" to="/shows">
        〱Atrás
      </NavLink>
      <h1 className="mt-3 display-4 fw-bold mb-0">
        Selección de ubicaciones Show 2022 - 1° Función
      </h1>
      <p className="text-dark display-6 fw-light mb-0">
        <u>Fecha:</u> 18/12
      </p>
      <p className="text-dark display-6 fw-light">
        <u>Horario:</u> 19:00
      </p>

      <h2 className="mt-5 mb-3 fw-light">
        Primero canjee su código y luego elija su ubicación:
      </h2>
      <form onSubmit={(e) => handleCodigo(e)}>
        <input
          className={`form-control form-control-lg ${
            triggerCodigoSuccess ? "border-success" : ""
          }`}
          name="code"
          type="text"
          id="inputCodigo"
          placeholder="Ingrese su Código"
          required
        />
        <p className="text-danger mb-0 fs-6">
          *Una vez canjeado el código NO refresque la página
        </p>
        <button
          type="submit"
          className={`btn btn-lg btn-primary w-100 mt-1 ${
            triggerCodigoError ? "bg-white" : ""
          } ${triggerCodigoSuccess ? "bg-success border-success fs-6" : ""}`}
        >
          {triggerCodigoError
            ? "❌"
            : triggerCodigoSuccess
            ? "Código canjeado con exito! ✅"
            : "Canjear código"}
        </button>
      </form>

      <h4 className="mt-3 fw-normal display-6 border-bottom">
        Mis butacas: <b>{cantidadMisButacas}</b>
      </h4>

      <p className="mt-5 mb-1">Seleccione su ubicación:</p>
      <div className="d-flex flex-wrap justify-content-start">
        <div className="d-flex">
          <div
            className="me-1"
            style={{
              minWidth: "2rem",
              maxHeight: "1.5rem",
              backgroundColor: "#2FBA44",
            }}
          ></div>
          <p className="me-3 text-dark fw-bold">Disponible</p>
        </div>

        <div className="d-flex">
          <div
            className="bg-danger me-1"
            style={{ minWidth: "2rem", maxHeight: "1.5rem" }}
          ></div>
          <p className="me-3 text-dark fw-bold">Ocupadas</p>
        </div>

        <div className="d-flex">
          <div
            className="me-1"
            style={{
              minWidth: "2rem",
              maxHeight: "1.5rem",
              backgroundColor: "#0DCAF0",
            }}
          ></div>
          <p className="text-dark fw-bold">Seleccionadas</p>
        </div>
      </div>

      <div className="mt-0 border pb-3" style={{ overflow: "scroll" }}>
        <div className="disable-highlighting text-center bg-info text-white fw-bold mb-2 py-4 display-1 escenario">
          ESCENARIO
        </div>

        {isLoading ? (
          <Oval
            className=""
            height={150}
            width={150}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass="justify-content-center my-5"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        ) : (
          <Fragment>
            {/*Butacas Start*/}
            <h5 className="mx-3">Platea BAJA</h5>
            {cantidadFilasPlateaBaja.map((fila) => (
              <div className="row" key={fila}>
                <div className="col-1">
                  <div className="d-flex m-2 fila">
                    <div className="">{fila}</div>
                    {arrayPlateaBaja.map((butaca, index) =>
                      butaca.fila === fila ? (
                        <div
                          className={
                            butaca.disponible === 1
                              ? "disable-highlighting mx-1 py-1 px-3 fw-bold text-white"
                              : "disable-highlighting mx-1 py-1 px-3 fw-bold text-dark"
                          }
                          role="button"
                          style={{
                            backgroundColor: selectedBackground(butaca),
                          }}
                          key={index}
                          onClick={(e) => handleSelectedButaca(e, butaca)}
                        >
                          {butaca.butaca}
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            ))}
            <h5 className="mx-3 border-1 border-dark border-top mt-2">
              Platea ALTA
            </h5>
            {cantidadFilasPlateaAlta.map((fila) => (
              <div className="row" key={fila}>
                <div className="col-1">
                  <div className="d-flex m-2 fila">
                    <div className="">{fila}</div>
                    {arrayPlateaAlta.map((butaca, index) =>
                      butaca.fila === fila ? (
                        <div
                          className={
                            butaca.disponible === 1
                              ? "disable-highlighting mx-1 py-1 px-3 fw-bold text-white"
                              : "disable-highlighting mx-1 py-1 px-3 fw-bold text-dark"
                          }
                          role="button"
                          style={{
                            backgroundColor: selectedBackground(butaca),
                          }}
                          key={index}
                          onClick={(e) =>
                            handleSelectedButacaPlateaAlta(e, butaca)
                          }
                        >
                          {butaca.butaca}
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            ))}
            {/*Butacas End*/}{" "}
          </Fragment>
        )}
      </div>

      <h6 className="mt-5 display-6 fw-bold">
        Una vez seleccionada su ubicación, ingrese sus datos:
      </h6>
      <form ref={form} onSubmit={(e) => handleConfirmarUbicacion(e)}>
        <input
          className="form-control form-control-lg"
          type="email"
          name="user_email"
          id="inputEmail"
          placeholder="Ingrese su Email"
          required
        />
        <input
          className="form-control form-control-lg mt-2"
          type="text"
          name="user_nombre"
          id="inputNombre"
          placeholder="Ingrese Nombre y Apellido"
          required
        />
        <input
          className="d-none"
          type="text"
          name="user_ubicaciones_platea_baja"
          defaultValue={`${
            butacaSeleccionadasPlateaBaja.length > 0
              ? "Platea BAJA: " +
                butacaSeleccionadasPlateaBaja
                  .map(
                    (butaca) =>
                      `Fila: ${butaca.fila} - Butaca: ${butaca.butaca} ||`
                  )
                  .join(" ")
              : ""
          }`}
        />
        <input
          className="d-none"
          type="text"
          name="user_ubicaciones_platea_alta"
          defaultValue={`${
            butacaSeleccionadasPlateaAlta.length > 0
              ? "Platea ALTA: " +
                butacaSeleccionadasPlateaAlta
                  .map(
                    (butaca) =>
                      `Fila: ${butaca.fila} - Butaca: ${butaca.butaca} ||`
                  )
                  .join(" ")
              : ""
          }`}
        />
        <input
          className="d-none"
          type="text"
          name="funcion"
          defaultValue="Función 1"
        />
        <button
          type="submit"
          className={`btn btn-lg w-100 btn-primary mt-2 mb-3 ${
            triggerConfirmError ? "bg-white" : ""
          } ${
            triggerConfirmErrorOccupated
              ? "border-danger bg-white text-danger"
              : ""
          } ${triggerConfirmSuccess ? "bg-success border-success" : ""}`}
        >
          {triggerConfirmError
            ? "❌"
            : triggerConfirmSuccess
            ? "✅"
            : triggerConfirmErrorOccupated
            ? "Butaca No Disponible ❌"
            : "Confirmar"}
        </button>
      </form>
      <div
        className="alert alert-success w-100 text-center fs-2 bg-success text-light shadow-lg m-0"
        role="alert"
        id="alerta"
        style={{ display: "none" }}
      >
        Ubicaciones Confirmadas! Se ha enviado un correo a su email con el
        detalle.
        <button
          type="button"
          className="btn-close btn-sm "
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <style jsx="true">
        {`
          .disable-highlighting {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          .escenario {
            width: 62rem;
          }

          @media (min-width: 1200px) {
            .fila {
              justify-content: center;
            }

            .escenario {
              width: auto;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Show;

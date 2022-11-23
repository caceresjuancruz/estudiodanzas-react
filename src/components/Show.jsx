import React, { useState, useEffect } from "react";

function Show() {
  const [arrayFilas, setArrayFilas] = useState([]);

  const [arrayFilasPlateaAlta, setArrayFilasPlateaAlta] = useState([]);

  function handleConfirm(event) {
    event.preventDefault();
  }

  useEffect(() => {
    setArrayFilas([]);
    setArrayFilasPlateaAlta([]);

    for (let i = 0; i < 18; i++) {
      const butacas = [];
      for (let i = 0; i < 18; i++) {
        butacas.push({
          numero: i + 1,
          owner: null,
          disponible: true,
        });
      }
      setArrayFilas((arrayFilas) => [
        ...arrayFilas,
        { numeroFila: i + 1, butacas: butacas },
      ]);
    }

    for (let i = 0; i < 8; i++) {
      const butacas = [];
      for (let i = 0; i < 21; i++) {
        butacas.push({
          numero: i + 1,
          owner: null,
          disponible: true,
        });
      }
      setArrayFilasPlateaAlta((arrayFilasPlateaAlta) => [
        ...arrayFilasPlateaAlta,
        { numeroFila: i + 1, butacas: butacas },
      ]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container py-3 px-1">
      <h1 className="mb-3">Selección de ubicaciones - Show 2022</h1>

      <form className="">
        <input
          className="form-control"
          type="text"
          id="inputCodigo"
          placeholder="Ingrese su Código"
          required
        />
        <button type="submit" className="btn btn-lg w-100 btn-primary mt-1">
          Canjear código
        </button>
      </form>

      <h4 className="mt-3 fw-normal border-bottom">Mis butacas: 0</h4>

      <p className="mt-5 mb-1">Seleccione su ubicación:</p>
      <div className="d-flex justify-content-start">
        <div
          className="bg-success me-1"
          style={{ minWidth: "2rem", maxHeight: "1.5rem" }}
        ></div>
        <p className="me-3 text-dark">Disponible</p>

        <div
          className="bg-danger me-1"
          style={{ minWidth: "2rem", maxHeight: "1.5rem" }}
        ></div>
        <p className="text-dark">No disponible</p>
      </div>

      <div className="text-center text-bg-info mb-2 py-4 fs-1">ESCENARIO</div>

      <div className="mt-0 border" style={{ overflow: "scroll" }}>
        <h5 className="mx-2">Platea BAJA</h5>
        {arrayFilas.map((fila) => (
          <div className="row">
            <div className="col-1">
              <div className="d-flex m-2">
                <div className="">{fila.numeroFila}</div>
                {fila.butacas.map((butaca) => (
                  <div
                    className={
                      butaca.disponible === true
                        ? "bg-success mx-1 py-1 px-3 fw-bold text-white"
                        : "bg-danger mx-1 py-1 px-3 fw-bold text-dark"
                    }
                    key={butaca.numero}
                  >
                    {butaca.numero}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 border" style={{ overflow: "scroll" }}>
        <h5 className="mx-2">Platea ALTA</h5>
        {arrayFilasPlateaAlta.map((fila) => (
          <div className="row">
            <div className="col-1">
              <div className="d-flex m-2">
                <div className="">{fila.numeroFila}</div>
                {fila.butacas.map((butaca) => (
                  <div
                    className={
                      butaca.disponible === true
                        ? "bg-success mx-1 py-1 px-3 fw-bold text-white"
                        : "bg-danger mx-1 py-1 px-3 fw-bold text-dark"
                    }
                    key={butaca.numero}
                  >
                    {butaca.numero}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form className="my-5" onSubmit={(e) => handleConfirm(e)}>
        <input
          className="form-control"
          type="text"
          id="inputEmail"
          placeholder="Ingrese su Email"
          required
        />
        <button
          type="submit"
          className="btn btn-lg w-100 btn-primary mt-1"
          data-bs-toggle="modal"
          data-bs-target="#confirmModal"
        >
          Confirmar
        </button>

        {/* Modal */}
        <div
          className="modal fade"
          id="confirmModal"
          tabindex="-1"
          aria-labelledby="confirmModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-6" id="exampleModalLabel">
                  Desea confirmar su selección?
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body mx-auto">
                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary btn-lg ms-2">
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Show;

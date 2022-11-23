import React, { useState, useEffect } from "react";

function Show() {
  const [arrayButacas, setArrayButacas] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      setArrayButacas((arrayButacas) => [
        ...arrayButacas,
        {
          numero: i + 1,
          owner: null,
          disponible: true,
        },
      ]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container py-3 px-1">
      <form className="">
        <input
          className="form-control"
          type="text"
          id="inputCodigo"
          placeholder="Código"
        />
        <button type="submit" className="btn w-100 btn-primary mt-1">
          Activar
        </button>
      </form>

      <h4 className="mt-3 fw-normal">Mis butacas: 0</h4>

      <div className="border border-danger text-center text-bg-success mt-5">
        ESCENARIO
      </div>

      <div className="d-flex mt-3" style={{ overflow: "scroll" }}>
        {arrayButacas.map((butaca) => (
          <div
            className={
              butaca.disponible === true
                ? "bg-success mx-1 px-1"
                : "bg-danger mx-1 px-1"
            }
            key={butaca.numero}
          >
            {butaca.numero}
          </div>
        ))}
      </div>

      <form className="mt-5">
        <input
          className="form-control"
          type="text"
          id="inputEmail"
          placeholder="Email"
        />
        <button type="submit" className="btn w-100 btn-primary mt-1">
          Canjear entradas
        </button>
      </form>
    </div>
  );
}

export default Show;

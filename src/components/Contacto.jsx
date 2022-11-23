import React from "react";

function Contacto() {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-3 mb-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            Contacto
          </h1>
        </div>
      </div>
      {/* Page Header End */}

      <div className="row m-0 mb-5">
        <div className="col-12 col-lg-6 p-0 px-lg-3">
          {/* Google Map Start */}
          <div
            className="container-xxl px-lg-2 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <iframe
              className="w-100 mb-2 rounded-3"
              id="mapa"
              title="mapa"
              style={{ height: "450px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7466603266416!2d-61.49565218431627!3d-31.255435795613764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae370942d931%3A0x842b6eb12a17477d!2sEstudio%20de%20Danzas%20Viviana%20Musso!5e0!3m2!1sen!2sar!4v1652266042946!5m2!1sen!2sar"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          {/* Google Map End */}
        </div>
        <div className="col-12 col-lg-6 p-0">
          {/* Contact List */}
          <div className="container container-contact-list mr-auto m-0 p-lg-2">
            <h2 id="contact-list-title">Estudio de Danzas Viviana Musso</h2>
            <ul className="contact-list m-0 p-0 justify-items-start">
              <li className="contact-list-item contact-list-item-direccion">
                Colón 315, Rafaela, Santa Fe
              </li>
              <li className="contact-list-item contact-list-item-telefono">
                +54 9 3492 566832
              </li>
              <li className="contact-list-item contact-list-item-email">
                estudiodedanzasvivianamusso@gmail.com
              </li>
              <li className="contact-list-item contact-list-item-instagram">
                instagram.com/estudiodedanzasvivianamusso
              </li>
              <li className="contact-list-item contact-list-item-facebook">
                facebook.com/estudiodedanzas.vivianamusso.39
              </li>
            </ul>
          </div>

          {/* Contact List End */}
        </div>
      </div>
    </div>
  );
}

export default Contacto;

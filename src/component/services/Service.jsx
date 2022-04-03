import React from 'react';
import ServiceList from './ServiceList';

export default function Service() {

  return (
    <div className="service-area pt--120 pb--50 bg_color--1" id="service">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30">
                      <h2 className="title">Nossos Serviços</h2>
                      <p>Somos umas empresa que ofere serviços diferenciados aos nossos clientes. Com excelência em qualidade, atendimento e praticidade.</p>
                  </div>
              </div>
          </div>
          <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-center" />
      </div>
    </div>
  );
}
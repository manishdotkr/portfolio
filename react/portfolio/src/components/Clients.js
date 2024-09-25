import React from 'react';

function Clients() {
  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        <ClientItem logo="logo-1-color.png" />
        <ClientItem logo="logo-2-color.png" />
        <ClientItem logo="logo-3-color.png" />
        <ClientItem logo="logo-4-color.png" />
        <ClientItem logo="logo-5-color.png" />
        <ClientItem logo="logo-6-color.png" />
      </ul>
    </section>
  );
}

function ClientItem({ logo }) {
  return (
    <li className="clients-item">
      <a href="#">
        <img src={`./assets/images/${logo}`} alt="Client logo" />
      </a>
    </li>
  );
}

export default Clients;

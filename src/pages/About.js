import React from "react";
import aboutConfig from "../config/aboutConfig";
import "../assets/css/about.css"

function About() {
  return (
    <article className="about" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>{aboutConfig.aboutText1}</p>
        <p>{aboutConfig.aboutText2}</p>
      </section>
      <ServiceList />
      <Testimonials />
      <Clients />
    </article>
  );
}

function ServiceList() {
  const serviceList = [...aboutConfig.serviceList];
  serviceList.forEach((obj, idx) => {
    obj.icon = require(`../assets/images/svg/icon-${idx + 1}.svg`);
  });

  return (
    <section className="service">
      <h3 className="h3 service-title">What I'm doing</h3>
      <ul className="service-list">
        {serviceList.map((service, index) => (
          <li key={`service-${index}`} className="service-item">
            <div className="service-icon-box">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>
              <p className="service-item-text">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Testimonials() {
  const testimonialsList = [...aboutConfig.testimonialsList];
  testimonialsList.forEach((obj, idx) => {
    obj.avatar = require(`../assets/images/avatar/avatar-${idx + 1}.png`);
  });

  return (
    <section className="testimonials" style={{ display: "none" }}>
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        {testimonialsList.map((witness, index) => (
          <li key={`testimonial-${index}`} className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={witness.avatar}
                  alt={witness.name}
                  width="60"
                  data-testimonials-avatar
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                {witness.name}
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>{witness.testimony}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Clients() {
  const clientsList = [...aboutConfig.clientsList];
  clientsList.forEach((obj, idx) => {
    obj.logo = require(`../assets/images/logos/logo-${idx + 1}-color.png`);
  });

  return (
    <section className="clients" style={{ display: "none" }}>
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        {clientsList.map((client, index) => (
          <li key={`client-${index}`} className="clients-item">
            <a href={client.link} target="_blank" rel="noreferrer">
              <img src={client.logo} alt="Client logo" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;
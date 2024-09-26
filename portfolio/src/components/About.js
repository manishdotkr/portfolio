import React from 'react';
import Testimonials from './Testimonials';
import Clients from './Clients';

import iconDesign from '../assets/images/svg/icon/design.svg';
import iconApp from '../assets/images/svg/icon/app.svg';
import iconPhoto from '../assets/images/svg/icon/photo.svg';
import iconDev from '../assets/images/svg/icon/dev.svg';

function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I'm a DevOps Engineer from Delhi, India, working in the Software Engineering field and web development.
          Streamlining infrastructure automation and ensuring seamless CI/CD pipelines, I empower development teams
          with reliable, scalable, and efficient deployment solutions.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is
          to bring across your message and identity in the most creative way. I created web design for many famous
          brand companies.
        </p>
      </section>
      <ServiceList />
      <Testimonials />
      <Clients />
    </article>
  );
}

function ServiceList() {
  return (
    <section className="service">
      <h3 className="h3 service-title">What I'm doing</h3>
      <ul className="service-list">
        <ServiceItem title="DevOps" text="Efficient and Stable Pipeline and Script made at a professional level." icon={iconDesign} />
        <ServiceItem title="Cloud" text="Robust and scalable cloud architecture crafted with expertise, leveraging AWS services for optimal performance and reliability." icon={iconApp} />
        <ServiceItem title="Data Structure and Algorithms" text="Mastering core programming languages and algorithms to deliver high-performance, efficient, and innovative software solutions." icon={iconPhoto} />
        <ServiceItem title="Development" text="High-quality development of APIs at the professional level." icon={iconDev} />
      </ul>
    </section>
  );
}

function ServiceItem({ title, text, icon }) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={icon} alt={`${title} icon`} width="40" />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">{text}</p>
      </div>
    </li>
  );
}

export default About;

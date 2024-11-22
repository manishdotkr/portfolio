import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner'
import contactConfig from '../config/contactConfig';
import "../assets/css/contact.css"

const Contact = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };
  return(
  <article className="contact" data-page="contact">
    <header>
      <h2 className="h2 article-title">Contact</h2>
    </header>

    <section className="mapbox" data-mapbox>
    {loading && <LoadingSpinner /> }
      <figure>
        <iframe
          src={contactConfig.map}
          width="400" height="300" loading="lazy" title="google-maps" onLoad={handleLoad}
        >
        </iframe>
      </figure>
    </section>

    <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      <form action="#" className="form" data-form>
        <div className="input-wrapper">
          <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
          <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
        </div>
        <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
        <button className="form-btn" type="submit" disabled data-form-btn>
          <ion-icon name="paper-plane" />
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
)};

export default Contact;

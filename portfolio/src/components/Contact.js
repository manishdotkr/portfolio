import React from 'react';

const Contact = () => (
  <article className="contact active" data-page="contact">
    <header>
      <h2 className="h2 article-title">Contact</h2>
    </header>

    <section className="mapbox" data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510669404!2d76.7635544609349!3d28.64428734491691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1725025942525!5m2!1sen!2sin"
          width="400" height="300" loading="lazy"></iframe>
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
);

export default Contact;

import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "../components/LoadingSpinner";
import contactConfig from "../config/contactConfig";
import { IonIcon } from "@ionic/react";
import { paperPlane } from "ionicons/icons";
import "../assets/css/contact.css";

const {
  REACT_APP_EMAILJS_PUBLIC_KEY,
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
} = process.env;

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const form = useRef();

  const handleLoad = () => {
    setLoading(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send Email. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  return (
    <article className="contact" data-page="contact">
      <ToastContainer />

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        {loading && <LoadingSpinner />}
        <figure>
          <iframe
            src={contactConfig.map}
            width="400"
            height="300"
            loading="lazy"
            title="google-maps"
            onLoad={handleLoad}
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form ref={form} onSubmit={sendEmail} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="user_name"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />
            <input
              type="email"
              name="user_email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>
          <button className="form-btn" type="submit" value="Send" data-form-btn>
            <IonIcon icon={paperPlane} />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;

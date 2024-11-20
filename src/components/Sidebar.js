import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronDown } from "ionicons/icons";
import "../assets/css/sidebar.css"
import {
  personalConfig,
  contactConfig,
  socialConfig,
} from "../config/_mainConfig";

const Sidebar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1250);
  const [showContacts, setShowContacts] = useState(window.innerWidth > 1250);

  const toggleContacts = () => {
    setShowContacts((prevShow) => !prevShow);
  };

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth > 1250;
      setIsLargeScreen(isLarge);
      setShowContacts(isLarge);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={personalConfig.avatar}
            alt={personalConfig.name}
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title={personalConfig.name}>
            {personalConfig.name}
          </h1>
          <p className="title">{personalConfig.designation}</p>
        </div>

        {!isLargeScreen && (
          <button
            className="info_more-btn"
            onClick={toggleContacts}
            data-sidebar-btn
          >
            <span>{showContacts ? "Hide Contacts" : "Show Contacts"}</span>
            <IonIcon icon={chevronDown} />
          </button>
        )}
      </div>

      <div className={`sidebar-info_more ${showContacts ? "show" : ""}`}>
        <div className="separator"></div>

        <ul className="contacts-list">
          {contactConfig.map((contact) => (
            <li className="contact-item" key={contact.title}>
              <div className="icon-box">
                <IonIcon icon={contact.logo} />
              </div>
              <div className="contact-info">
                <p className="contact-title">{contact.title}</p>
                <a href="mailto:manishdotkr@gmail.com" className="contact-link">
                  {contact.detail}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {socialConfig.map((social) => (
            <li className="social-item" key={social.url}>
              <a href={social.url} className="social-link">
                <IonIcon icon={social.logo} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

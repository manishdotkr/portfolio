import React from 'react';
import { IonIcon } from '@ionic/react';
import avatar from '../src/assets/images/my-avatar.png';

function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Manish Kumar" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Manish Kumar">Manish Kumar</h1>
          <p className="title">Associate DevOps Engineer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <IonIcon name="chevron-down" />
        </button>
      </div>
      <SidebarDetails />
    </aside>
  );
}

function SidebarDetails() {
  return (
    <div className="sidebar-info_more">
      <div className="separator"></div>
      <ContactList />
      <div className="separator"></div>
      <SocialLinks />
    </div>
  );
}

function ContactList() {
  return (
    <ul className="contacts-list">
      <ContactItem icon="mail-outline" title="Email" link="mailto:manishdotkr@gmail.com" text="manishdotkr@gmail.com" />
      <ContactItem icon="phone-portrait-outline" title="Phone" link="tel:+917834898501" text="+91 7834898501" />
      <ContactItem icon="calendar-outline" title="Birthday" text="April 17, 1998" />
      <ContactItem icon="location-outline" title="Location" text="Delhi, India" />
    </ul>
  );
}

function ContactItem({ icon, title, link, text }) {
  return (
    <li className="contact-item">
      <div className="icon-box">
        <IonIcon name={icon} />
      </div>
      <div className="contact-info">
        <p className="contact-title">{title}</p>
        {link ? <a href={link} className="contact-link">{text}</a> : <p>{text}</p>}
      </div>
    </li>
  );
}

function SocialLinks() {
  return (
    <ul className="social-list">
      <SocialItem link="https://github.com/manishdotkr" icon="logo-github" />
      <SocialItem link="https://www.linkedin.com/in/manishdotkr/" icon="logo-linkedin" />
      <SocialItem link="https://www.instagram.com/manishdotkr" icon="logo-instagram" />
    </ul>
  );
}

function SocialItem({ link, icon }) {
  return (
    <li className="social-item">
      <a href={link} className="social-link">
        <IonIcon name={icon} />
      </a>
    </li>
  );
}

export default Sidebar;

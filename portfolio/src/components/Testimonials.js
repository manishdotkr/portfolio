import React from 'react';
import testimonialAvatar1 from '../assets/images/avatar-1.png';
import testimonialAvatar2 from '../assets/images/avatar-2.png';
import testimonialAvatar3 from '../assets/images/avatar-3.png';
import testimonialAvatar4 from '../assets/images/avatar-4.png';

function Testimonials() {
  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        <TestimonialItem name="Daniel Lewis" avatar={testimonialAvatar1} />
        <TestimonialItem name="Jessica Miller" avatar={testimonialAvatar2} />
        <TestimonialItem name="Emily Evans" avatar={testimonialAvatar3} />
        <TestimonialItem name="Henry William" avatar={testimonialAvatar4} />
      </ul>
    </section>
  );
}

function TestimonialItem({ name, avatar }) {
  return (
    <li className="testimonials-item">
      <div className="content-card" data-testimonials-item>
        <figure className="testimonials-avatar-box">
          <img src={avatar} alt={name} width="60" data-testimonials-avatar />
        </figure>
        <h4 className="h4 testimonials-item-title" data-testimonials-title>{name}</h4>
        <div className="testimonials-text" data-testimonials-text>
          <p>
            Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of
            experience and is very concerned about the needs of client.
          </p>
        </div>
      </div>
    </li>
  );
}

export default Testimonials;

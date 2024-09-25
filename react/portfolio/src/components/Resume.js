import React from 'react';

const Resume = () => (
  <article className="resume" data-page="resume">
    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>

    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline" />
        </div>
        <h3 className="h3">Education</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Maharaja Surajmal Institute Of Technology</h4>
          <span>2019 — 2022</span>
          <p className="timeline-text">Bachelor of Technology in Information Technology</p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Pusa Institute Of Technology</h4>
          <span>2014 — 2017</span>
          <p className="timeline-text">Diploma in Mechanical Engineering</p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Deepanshu Public School</h4>
          <span>2013 — 2014</span>
          <p className="timeline-text">Secondary School Certificate (Class 10th)</p>
        </li>
      </ol>
    </section>

    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline" />
        </div>
        <h3 className="h3">Experience</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Associate Engineer, DevOps and Cloud Technologies</h4>
          <span>2022 — Present</span>
          <p className="timeline-text">Impressico Business Solutions</p>
        </li>
      </ol>
    </section>

    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        {['DevOps', 'Cloud', 'Coding Languages (Python, Java, Groovy, JavaScript)', 'Development'].map(skill => (
          <li key={skill} className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">{skill}</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </article>
);

export default Resume;

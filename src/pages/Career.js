import React from "react";
import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";
import "../assets/css/carrer.css"
import {
  educationConfig,
  experienceConfig,
  skillsConfig,
} from "../config/careerConfig";

const Career = () => (
  <article className="career" data-page="career">
    <header>
      <h2 className="h2 article-title">Career</h2>
    </header>
    {/* Education Section */}
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>
        <h3 className="h3">Education</h3>
      </div>
      <ol className="timeline-list">
        {educationConfig.map((edu, index) => (
          <li key={`edu-${index}`} className="timeline-item">
            <h4 className="h4 timeline-item-title">{edu.org}</h4>
            <span>{edu.session}</span>
            <p className="timeline-text">{edu.course}</p>
          </li>
        ))}
      </ol>
    </section>
    {/* Experience Section */}
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>
        <h3 className="h3">Experience</h3>
      </div>
      <ol className="timeline-list">
        {experienceConfig.map((org, index) => (
          <li key={`exp-${index}`} className="timeline-item">
            <h4 className="h4 timeline-item-title">{org.designation}</h4>
            <span>{org.tenure}</span>
            <p className="timeline-text">{org.name}</p>
          </li>
        ))}
      </ol>
    </section>
    {/* Skills Section */}
    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        {skillsConfig.map((skill, index) => (
          <li key={`skill-${index}`} className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">{skill.name}</h5>
              <data value={skill.level}>{skill.level}%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </article>
);

export default Career;
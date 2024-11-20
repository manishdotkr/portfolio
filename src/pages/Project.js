import React from 'react';
import projectConfig from '../config/projectConfig'

const Project = () => {

  const projects = [ ...projectConfig.projects];

  return (
    <article className="project" data-page="project">
      <header>
        <h2 className="h2 article-title">Project</h2>
      </header>

      <section className="project-posts">
        <ul className="project-posts-list">
          {projects.map(project => (
            <li key={project.id} className="project-post-item">
              <a href={project.link} target="_blank" rel="noreferrer">
                <figure className="project-banner-box">
                  <img src={require(`../assets/images/projects/${project.image}`)} alt={project.alt} loading="lazy" />
                </figure>
                <div className="project-content">
                  <div className="project-meta">
                    <p className="project-category">{project.category}</p>
                    <span className="dot"></span>
                    <time dateTime={project.date}>{new Date(project.date).toDateString()}</time>
                  </div>
                  <h3 className="h3 project-item-title">{project.title}</h3>
                  <p className="project-text">{project.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Project;

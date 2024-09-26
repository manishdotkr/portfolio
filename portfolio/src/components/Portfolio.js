import React from 'react';

const Portfolio = () => (
  <article className="portfolio active" data-page="portfolio">
    <header>
      <h2 className="h2 article-title">Portfolio</h2>
    </header>

    <section className="projects">
      <ul className="filter-list">
        {['All', 'Web design', 'Applications', 'Web development'].map(category => (
          <li key={category} className="filter-item">
            <button className={category === 'All' ? 'active' : ''} data-filter-btn>{category}</button>
          </li>
        ))}
      </ul>

      <div className="filter-select-box">
        <button className="filter-select" data-select>
          <div className="select-value" data-selecct-value>Select category</div>
          <div className="select-icon">
            <ion-icon name="chevron-down" />
          </div>
        </button>
        <ul className="select-list">
          {['All', 'Web design', 'Applications', 'Web development'].map(category => (
            <li key={category} className="select-item">
              <button data-select-item>{category}</button>
            </li>
          ))}
        </ul>
      </div>

      <ul className="project-list">
        {/* Replace the below items with dynamic content as needed */}
        {[1, 2, 3].map(num => (
          <li key={num} className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img src={`./assets/images/project-${num}.jpg`} alt={`project ${num}`} loading="lazy" />
              </figure>
              <h3 className="project-title">Project {num}</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </article>
);

export default Portfolio;

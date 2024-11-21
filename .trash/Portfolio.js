import React, { useState } from "react";
import portfolioConfig from "../config/portfolioConfig";
import { IonIcon } from "@ionic/react";
import { eyeOutline } from "ionicons/icons";

import "../assets/css/portfolio.css"

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [...portfolioConfig.categories];
  const projects = [...portfolioConfig.projects];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <FilterList
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ProjectList filteredProjects={filteredProjects} />
      </section>
    </article>
  );
};

const FilterList = ({ categories, selectedCategory, setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ul className="filter-list">
      {categories.map((category) => (
        <li key={category} className="filter-item">
          <button
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategoryClick(category)}
            data-filter-btn
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

const ProjectList = ({ filteredProjects }) => {
  return (
    <ul className="project-list">
      {filteredProjects.map((project) => (
        <li
          key={project.id}
          className="project-item active"
          data-filter-item
          data-category={project.category}
        >
          <a href={project.link} target="_blank" rel="noreferrer">
            <figure className="project-img">
              <div className="project-item-icon-box">
                <IonIcon icon={eyeOutline} />
              </div>
              <img src={require(`../assets/images/links/${project.image}`)} alt={project.title} loading="lazy" />
            </figure>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Portfolio;

///////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import portfolioConfig from "../config/portfolioConfig";
// import { IonIcon } from "@ionic/react";
// import { eyeOutline } from "ionicons/icons";

// const Portfolio = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = [...portfolioConfig.categories];
//   const projects = [...portfolioConfig.projects];

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   return (
//     <article className="portfolio" data-page="portfolio">
//       <header>
//         <h2 className="h2 article-title">Portfolio</h2>
//       </header>

//       <section className="projects">
//         <FilterList
//           categories={categories}
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//         />
//         <ProjectList filteredProjects={filteredProjects} />
//       </section>
//     </article>
//   );
// };

// const FilterList = ({ categories, selectedCategory, setSelectedCategory }) => {
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <ul className="filter-list">
//       {categories.map((category) => (
//         <li key={category} className="filter-item">
//           <button
//             className={selectedCategory === category ? "active" : ""}
//             onClick={() => handleCategoryClick(category)}
//             data-filter-btn
//           >
//             {category}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const ProjectList = ({ filteredProjects }) => {
//   return (
//     <ul className="project-list">
//       {filteredProjects.map((project) => (
//         <li
//           key={project.id}
//           className="project-item active"
//           data-filter-item
//           data-category={project.category}
//         >
//           <a href={project.link} target="_blank" rel="noreferrer">
//             <figure className="project-img">
//               <div className="project-item-icon-box">
//                 <IonIcon icon={eyeOutline} />
//               </div>
//               <img src={require(`../assets/images/links/${project.image}`)} alt={project.alt} loading="lazy" />
//             </figure>
//             <h3 className="project-title">{project.title}</h3>
//             <p className="project-category">{project.category}</p>
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Portfolio;

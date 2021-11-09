import React, { useState } from "react";
import ProjectViewer from "./common/ProjectViewer";

const Portfolio = (props) => {
  const [projectViewOpen, setProjectViewOpen] = useState(false);

  const toggleProjectView = () => setProjectViewOpen(!projectViewOpen);

  if (props.data) {
    var professionalProjects = props.data.professionalProjects.map(function (
      professionalProject
    ) {
      return (
        <div key={professionalProject.title}>
          <div className="columns portfolio-item">
            <div
              className="item-wrap"
              style={{ cursor: "pointer" }}
              onClick={() => toggleProjectView()}
            >
              <img
                alt={professionalProject.title}
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  "/images/portfolio/" +
                  professionalProject.image
                }
              />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{professionalProject.title}</h5>
                  <p>{professionalProject.description}</p>
                </div>
              </div>
            </div>
          </div>
          <ProjectViewer
            title={professionalProject.title}
            open={projectViewOpen}
            toggleModal={toggleProjectView}
            achievements={professionalProject.achievements}
          />
        </div>
      );
    });

    var personalProjects = props.data.personalProjects.map(function (
      personalProject
    ) {
      return (
        <div key={personalProject.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={personalProject.url}>
              <img
                alt={personalProject.title}
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  "/images/portfolio/" +
                  personalProject.image
                }
              />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{personalProject.title}</h5>
                  <p>{personalProject.description}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row" id="professional-portfolio">
        <div className="twelve columns collapsed">
          <h1>Formations en Cours</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {professionalProjects}
          </div>
        </div>
      </div>
      <div
        className="row"
        id="personal-portfolio"
        style={{ marginTop: "15px" }}
      >
        <div className="twelve columns collapsed">
          <h1>Formations</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {personalProjects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

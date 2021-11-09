import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var qualifications = this.props.data.qualifications.map(function (
        qualification
      ) {
        return (
          <div key={qualification.organization}>
            <h3>{qualification.qualification}</h3>
            <p className="info">
              {qualification.organization} <span></span>
              <em className="date">{`${
                qualification.dateReceived
                  ? `(${qualification.dateReceived})`
                  : ""
              }`}</em>
            </p>

            <p>
              {qualification.descriptions?.map((description) =>
                description.text.length ? (
                  description.text
                ) : (
                  <>
                    • <a href={description.link}>{description.linkText}</a>
                    <br />
                  </>
                )
              )}
            </p>
          </div>
        );
      });
      var workLength = this.props.data.work.length;
      var work = this.props.data.work.map(function (work, i) {
        return (
          <div key={work.company}>
            <h3>{work.title}</h3>
            <p className="info">
              {`${work.company}, ${work.location}`}
              <span></span> <em className="date">{work.years}</em>
            </p>
            {Array.isArray(work.description) ? (
              work.description.map((_, i) => (
                <div key={`${work.company} job description ${i}`}>
                  <p style={{ margin: "0 0 10px", lineHeight: "2.5rem" }}>
                    &bull; {_}
                  </p>
                </div>
              ))
            ) : (
              <p>{work.description}</p>
            )}
            {i !== workLength - 1 && <br />}
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Compétences</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Projets</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Langues</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{qualifications}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;

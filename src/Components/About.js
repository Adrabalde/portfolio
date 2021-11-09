import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic =
        process.env.REACT_APP_PUBLIC_URL + "/images/" + this.props.data.image;
      var bio = this.props.data.bio;
      // var street = this.props.data.address.street;
      var suburb = this.props.data.address.suburb;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Anthony Hien Vu's Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>À propos de moi</h2>

            <p style={{ lineHeight: "2.5rem" }}>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address" style={{ lineHeight: "2.5rem" }}>
                  <span>{name}</span>
                  <br />
                  <span>
                    {/* {street}<br /> */}
                    {suburb} {state} {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={
                      process.env.REACT_APP_PUBLIC_URL + "/" + resumeDownload
                    }
                    className="button"
                    download
                  >
                    <i className="fa fa-download"></i>Télécharger mon CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

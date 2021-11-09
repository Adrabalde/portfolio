import React, { useState } from "react";

const Contact = (props) => {
  if (props.data) {
    var name = props.data.name;
    var suburb = props.data.address.suburb;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone = props.data.phone;
    var email = props.data.email;
    var message = props.data.contactmessage;
  }

  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [emailSentStatus, setEmailSentStatus] = useState("notSent");

  const changeFromName = (event) => setFromName(event.target.value);
  const changeFromEmail = (event) => setFromEmail(event.target.value);
  const changeFormSubject = (event) => setFormSubject(event.target.value);
  const changeFormMessage = (event) => setFormMessage(event.target.value);

  const validateEmail = (email) => {
    // eslint-disable-next-line
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
  };

  const onSubmit = () => {
    if (
      fromName.length !== 0 &&
      fromEmail.length !== 0 &&
      validateEmail(fromEmail) &&
      formMessage.length !== 0
    ) {
      setEmailSentStatus("sending");
      window.emailjs
        .send("gmail", "template_8RW6Q4vx", {
          message: formMessage,
          from_name: fromName,
          email: fromEmail,
          subject: formSubject || "No Subject",
        })
        .then((res) => {
          setEmailSentStatus("sent");
        })
        .catch((err) => setEmailSentStatus("error"));
    } else {
      alert(
        `${
          fromName.length === 0
            ? "Please fill in the name field."
            : fromEmail.length === 0
            ? "Please write your email address."
            : !validateEmail(fromEmail)
            ? "Please enter a valid email address."
            : "Please write a message before clicking submit."
        }`
      );
    }
  };

  const renderEmptyForm = () => {
    setFromName("");
    setFromEmail("");
    setFormSubject("");
    setFormMessage("");
    setEmailSentStatus("notSent");
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Contact.</span>
          </h1>
        </div>

        <div className="ten columns">
          <h2 className="lead">{message}</h2>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          {emailSentStatus === "notSent" || emailSentStatus === "sending" ? (
            <div>
              <div>
                <label htmlFor="contactName">
                  Nom <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={changeFromName}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={changeFromEmail}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Sujet</label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={changeFormSubject}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  onChange={changeFormMessage}
                ></textarea>
              </div>

              <div className="buttonContainer">
                <button className="submit" onClick={() => onSubmit()}>
                  Envoyer
                </button>
                {emailSentStatus === "sending" && (
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/loader.gif"}
                    style={{ position: "relative", top: "18px", left: "10px" }}
                  />
                )}
              </div>
            </div>
          ) : emailSentStatus === "sent" ? (
            <div id="message-success">
              <i className="fa fa-check"></i>Votre message a bien été envoyé, merci!
              <br />
              <button
                className="renderForm"
                onClick={() => renderEmptyForm()}
                style={{ marginTop: "10px" }}
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <div id="message-warning">
              Error has occured, message not sent. Please try again later.
            </div>
          )}
        </div>

        <aside className="four columns footer-widgets">
          <div className="contactDetails">
            <h4>Details Contacts</h4>
            <p className="address" style={{ lineHeight: "2.5rem" }}>
              {name}
              <br />
              {/* {street} <br /> */}
              {suburb}, {state} {zip}
              <br />
              {email}
              <br />
              <span>{phone}</span>
            </p>
          </div>

          <div className="widget widget_tweets">
            <h4 className="widget-title">Merci d'avoir lu</h4>
            <ul id="twitter">
              <li>
                <span style={{ lineHeight: "2.5rem" }}>
                J'apprécie votre intérêt et j'ai hâte de vous entendre.
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;

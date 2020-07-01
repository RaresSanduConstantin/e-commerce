import React from "react";
import { Route } from "react-router-dom";
import "./contact.style.scss";

const ContactPage = () => (
  <div className="contact-page">
    <Route exact path={`/contact`} />
    <section className="get-in-touch">
      <h1 className="title">Get in Touch!</h1>
      <form className="contact-form row">
        <div className="form-field col x-50">
          <input
            id="name"
            className="input-text js-input not-empty"
            type="text"
            required
          />
          <label className="label" for="name">
            Name!
          </label>
        </div>
        <div className="form-field col x-50">
          <input
            id="email"
            className="input-text js-input not-empty"
            type="email"
            required
          />
          <label className="label" for="email">
            E-mail
          </label>
        </div>
        <div className="form-field col x-100">
          <input
            id="message"
            className="input-text js-input not-empty"
            type="text"
            required
          />
          <label className="label" for="message">
            Message
          </label>
        </div>
        <div className="form-field col x-100 align-center">
          <input
            id="name"
            className="submit-btn"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </section>
  </div>
);

export default ContactPage;

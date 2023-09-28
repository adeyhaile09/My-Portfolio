import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { Alert, AlertTitle } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setsubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (name && email && subject && message) {
      const serviceIdd = process.env.SERVICE_ID;
      const templateIdd = process.env.TEMPLETE_ID;
      const userIdd = process.env.USER_ID;

      const serviceId = { serviceIdd };
      const templateId = { templateIdd };
      const userId = { userIdd };
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          setName('');
          setEmail('');
          setsubject('');
          setMessage('');
          setEmailSent(true);
        })
        .catch((error) => {});

      // TODO - send mail

      // setEmailSent(true);
    } else {
    }
  };
  // const isValidEmail = (email) => {
  //   const regex =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return regex.test(String(email).toLowerCase());
  // };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__detail">
            Don't like forms? Send me an email. 👋
          </p>
        </div>
        <form action="" className="contact__form" onSubmit={submit}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                required
                className="contact__form-input"
                placeholder="Insert your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                required
                className="contact__form-input"
                placeholder="Insert your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              required
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn">
              Send Message
            </button>

            <a className="btn" id="go" href="mailto:adeyhaile09@gmail.com">
              Go to Email
            </a>
            {emailSent && (
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Thank you for your message, we will be in touch in no time!
              </Alert>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;

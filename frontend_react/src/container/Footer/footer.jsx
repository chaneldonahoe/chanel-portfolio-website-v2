import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const { username, email, message } = formData;
  // eslint-disable-next-line 
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateEmail = (email) => {
    if (regex.test(email)) {
      setValidEmail(true);
      return true;
    }
    setValidEmail(false);
    setLoading(false);
    return false;
  }

  const validateName = (name) => {
    if (name !== undefined) {
      setValidName(true);
      return true;
    }
    setValidName(false);
    setLoading(false);
    return false;
  }

  const validateMessage = (msg) => {
    if (msg !== "") {
      setValidMessage(true);
      return true;
    }
    setValidMessage(false);
    setLoading(false);
    return false;
  }

  const submitClient = (contact) => {
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    validateMessage(contact.message);
    validateEmail(contact.email);
    validateName(contact.name);

    if (validateEmail(contact.email) && validateName(contact.name) && validateMessage(contact.message)) {
      submitClient(contact);
    };
  };

  return (
    <>
      <h2 className="head-text">Let's have a  chat</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:cdonahoe05@gmail.com" className="p-text">Send me an email</a>
        </div>
        <div className="app__footer-card">
          <img src={images.linkedin} alt="linkedin" />
          <a href="https://www.linkedin.com/in/chanel-donahoe/" className="p-text">DM me on Linkedin</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          {validName ? "" : <p className='invalidError'>❌ Oohps! Looks like you forgot your name  </p>}
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          {validEmail ? "" : <p className='invalidError'> ❌ Oohps! That looks like an invalid email.</p>}
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          {validMessage ? "" : <p className='invalidError'> ❌ What is your message?</p>}
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
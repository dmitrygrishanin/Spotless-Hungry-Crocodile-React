import React from 'react'

import PropTypes from 'prop-types'

import './contact-form4.css'

const ContactForm4 = (props) => {
  return (
    <div
      className={`contact-form4-contact9 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-flex-row thq-section-max-width contact-form4-max-width">
        <div className="contact-form4-content thq-flex-column">
          <div className="contact-form4-section-title thq-card">
            <span className="thq-body-small">{props.content2}</span>
            <div className="contact-form4-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <span className="thq-body-small">{props.content1}</span>
            </div>
          </div>
          <form className="thq-card">
            <div className="contact-form4-input">
              <label htmlFor="contact-form-4-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-4-name"
                placeholder="Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form4-input1">
              <label htmlFor="contact-form-4-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-4-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form4-container">
              <label
                htmlFor="contact-form-4-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-4-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <div className="contact-form4-checkbox">
              <input
                type="checkbox"
                id="contact-form-4-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="contact-form-4-check"
                className="contact-form4-text6 thq-body-small"
              >
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form4-button thq-button-filled"
            >
              <span className="thq-body-small">{props.action}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm4.defaultProps = {
  action: 'Contact Us',
  content2: 'Have a question or need support? Feel free to reach out to us.',
  heading1: 'Contact Form',
  content1:
    "Fill out the form below and we'll get back to you as soon as possible.",
  rootClassName: '',
}

ContactForm4.propTypes = {
  action: PropTypes.string,
  content2: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ContactForm4

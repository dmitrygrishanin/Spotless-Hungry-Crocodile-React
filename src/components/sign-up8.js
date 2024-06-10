import React from 'react'

import PropTypes from 'prop-types'

import './sign-up8.css'

const SignUp8 = (props) => {
  return (
    <div className="sign-up8-container">
      <div className="sign-up8-max-width thq-section-max-width">
        <div className="sign-up8-form-root">
          <div className="sign-up8-form">
            <div className="sign-up8-title-root">
              <h2 className="sign-up8-text thq-heading-2">{props.heading1}</h2>
              <div className="sign-up8-have-an-account-login"></div>
            </div>
            <form className="sign-up8-form1">
              <div className="sign-up8-email">
                <label htmlFor="thq-sign-up-8-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-up-8-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-up8-textinput thq-input thq-body-large"
                />
              </div>
            </form>
            <div className="sign-up8-container1">
              <p className="sign-up8-text02 thq-body-large">
                <span>
                  By creating an account, you agree to the Terms of use and
                  Privacy Policy.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <button type="submit" className="sign-up8-button thq-button-filled">
              <span className="sign-up8-text05 thq-body-small">
                {props.action1}
              </span>
            </button>
            <div className="sign-up8-have-an-account-login1">
              <p className="thq-body-large">Already have an account? Sign in</p>
            </div>
          </div>
        </div>
        <div className="sign-up8-container2 thq-section-padding">
          <div className="sign-up8-list">
            <h2 className="sign-up8-heading thq-heading-2">{props.heading2}</h2>
            <div className="sign-up8-list-item">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <p className="sign-up8-text07 thq-body-large">{props.content1}</p>
            </div>
            <div className="sign-up8-list-item1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <p className="sign-up8-text08 thq-body-large">{props.content2}</p>
            </div>
            <div className="sign-up8-list-item2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <p className="sign-up8-text09 thq-body-large">{props.content3}</p>
            </div>
            <div className="sign-up8-list-item3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <p className="sign-up8-text10 thq-body-large">{props.content4}</p>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0NHx8YWJzdHJhY3R8ZW58MHx8fHwxNzEyOTM3OTkzfDA&amp;ixlib=rb-4.0.3&amp;w=1400"
            className="sign-up8-image thq-img-ratio-1-1"
          />
          <div className="sign-up8-container3"></div>
        </div>
      </div>
    </div>
  )
}

SignUp8.defaultProps = {
  content2: 'Edit Links',
  content4: 'Delete Links',
  content3: 'Manage Links',
  action1: 'Sign up',
  heading1: 'Sign up',
  heading2:
    'By creating an account with CutU Links, you gain access to a range of additional features:',
  content1: 'View Detailed Statistics',
}

SignUp8.propTypes = {
  content2: PropTypes.string,
  content4: PropTypes.string,
  content3: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  content1: PropTypes.string,
}

export default SignUp8

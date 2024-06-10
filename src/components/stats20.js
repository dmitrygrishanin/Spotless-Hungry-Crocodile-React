import React from 'react'

import PropTypes from 'prop-types'

import './stats20.css'

const Stats20 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats20-max-width thq-section-max-width">
        <div className="stats20-container1">
          <h2 className="stats20-title thq-heading-2">{props.heading1}</h2>
          <span className="stats20-content thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="stats20-container2 thq-grid-3">
          <div className="stats20-container3">
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM96 192h832c17.346 0 32 14.654 32 32v96h-896v-96c0-17.346 14.654-32 32-32zM928 832h-832c-17.346 0-32-14.654-32-32v-288h896v288c0 17.346-14.654 32-32 32zM128 640h64v128h-64zM256 640h64v128h-64zM384 640h64v128h-64z"></path>
            </svg>
            <h2 className="thq-heading-2 stats20-text">{props.stat1}</h2>
            <span className="stats20-text01 thq-body-small">
              {props.stat1ShortDescription}
            </span>
            <span className="stats20-text02 thq-body-small">
              {props.stat1Description}
            </span>
            <button name="Read more" type="button" className="thq-button-flat">
              <span className="stats20-text03 thq-body-small">Read more</span>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div className="stats20-container4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM96 192h832c17.346 0 32 14.654 32 32v96h-896v-96c0-17.346 14.654-32 32-32zM928 832h-832c-17.346 0-32-14.654-32-32v-288h896v288c0 17.346-14.654 32-32 32zM128 640h64v128h-64zM256 640h64v128h-64zM384 640h64v128h-64z"></path>
            </svg>
            <h2 className="thq-heading-2 stats20-text04">{props.stat2}</h2>
            <span className="stats20-text05 thq-body-small">
              {props.stat2ShortDescription}
            </span>
            <span className="stats20-text06 thq-body-small">
              {props.stat2Description}
            </span>
            <button name="Read more" type="button" className="thq-button-flat">
              <span className="stats20-text07 thq-body-small">Read more</span>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div className="stats20-container5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM96 192h832c17.346 0 32 14.654 32 32v96h-896v-96c0-17.346 14.654-32 32-32zM928 832h-832c-17.346 0-32-14.654-32-32v-288h896v288c0 17.346-14.654 32-32 32zM128 640h64v128h-64zM256 640h64v128h-64zM384 640h64v128h-64z"></path>
            </svg>
            <h2 className="thq-heading-2 stats20-text08">{props.stat3}</h2>
            <span className="stats20-text09 thq-body-small">
              {props.stat3ShortDescription}
            </span>
            <span className="stats20-text10 thq-body-small">
              {props.stat3Description}
            </span>
            <button name="Read more" type="button" className="thq-button-flat">
              <span className="stats20-text11 thq-body-small">Read more</span>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats20.defaultProps = {
  content1: 'Check out the impressive statistics of CutU Links below.',
  stat2Description: 'Number of active users utilizing CutU Links services',
  stat3Description: 'Percentage of support inquiries resolved successfully',
  stat1ShortDescription: 'Total Links Shortened',
  heading1: 'Statistics',
  stat3ShortDescription: 'Support Tickets Resolved',
  stat2: '5,000+',
  stat1Description: 'Number of links shortened by users on CutU Links',
  stat1: '10,000+',
  stat3: '95%',
  stat2ShortDescription: 'Active Users',
}

Stats20.propTypes = {
  content1: PropTypes.string,
  stat2Description: PropTypes.string,
  stat3Description: PropTypes.string,
  stat1ShortDescription: PropTypes.string,
  heading1: PropTypes.string,
  stat3ShortDescription: PropTypes.string,
  stat2: PropTypes.string,
  stat1Description: PropTypes.string,
  stat1: PropTypes.string,
  stat3: PropTypes.string,
  stat2ShortDescription: PropTypes.string,
}

export default Stats20

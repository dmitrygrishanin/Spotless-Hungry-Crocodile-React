import React from 'react'

import PropTypes from 'prop-types'

import './stats1.css'

const Stats1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats1-max-width thq-section-max-width">
        <div className="stats1-container1 thq-flex-column">
          <span className="thq-body-small">{props.content1}</span>
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="thq-body-large">{props.content2}</p>
          <div className="stats1-container2">
            <div className="stats1-container3">
              <h2 className="thq-heading-2">{props.stat1}</h2>
              <span className="thq-body-small">{props.stat1Description}</span>
            </div>
            <div className="stats1-container4">
              <h2 className="thq-heading-2">{props.stat2}</h2>
              <span className="thq-body-small">{props.stat2Description}</span>
            </div>
          </div>
          <div className="stats1-container5">
            <div className="stats1-container6">
              <h2 className="thq-heading-2">{props.stat3}</h2>
              <span className="thq-body-small">{props.stat3Description}</span>
            </div>
            <div className="stats1-container7">
              <h2 className="thq-heading-2">{props.stat4}</h2>
              <span className="thq-body-small">{props.stat4Description}</span>
            </div>
          </div>
        </div>
        <div className="stats1-container8">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats1-image"
          />
        </div>
      </div>
    </div>
  )
}

Stats1.defaultProps = {
  stat3: '95%',
  stat4: '100%',
  stat2: '5,000+',
  stat3Description: 'Percentage of support inquiries resolved successfully',
  stat2Description: 'Number of active users utilizing CutU Links services',
  heading1: 'Statistics',
  stat4Description: 'consectetur adipiscing.',
  content1: 'Check out the impressive statistics of CutU Links below.',
  content2:
    'Business improvements emphasized with numbers to increase creadibility',
  stat1Description: 'Number of links shortened by users on CutU Links',
  image1Alt: 'image',
  stat1: '10,000+',
  image1Src:
    'https://images.unsplash.com/photo-1626884550211-aa2a84cf0105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzYxMDIzN3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Stats1.propTypes = {
  stat3: PropTypes.string,
  stat4: PropTypes.string,
  stat2: PropTypes.string,
  stat3Description: PropTypes.string,
  stat2Description: PropTypes.string,
  heading1: PropTypes.string,
  stat4Description: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  stat1Description: PropTypes.string,
  image1Alt: PropTypes.string,
  stat1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Stats1

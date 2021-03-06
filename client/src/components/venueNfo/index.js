import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';

import icon_calender from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'

export default class VenueNfo extends Component {
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper">
          <div className="vn_wrapper">
            <Zoom duration={500}>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_red"></div>
                    <div 
                        className="vn_icon"
                        style={{background: `url(${icon_calender})`}}>
                      </div>
                      <div className="vn_title">Event Date & Time</div>
                      <div className="vn_desc">Feb 20th, 2019 <br/>@ 4:00 PM</div>
                  </div>
                </div>
              </div>  
            </Zoom>
            <Zoom duration={500} delay={500}>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_red"></div>
                    <div 
                        className="vn_icon"
                        style={{background: `url(${icon_location})`}}>
                      </div>
                      <div className="vn_title">Event Location</div>
                    <div className="vn_desc">MGM Grand Garden Arena - Las Vegas</div>
                  </div>
                </div>
              </div>
            </Zoom>
            

          </div>
        </div>
      </div>
    )
  }
}

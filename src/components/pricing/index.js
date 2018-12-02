import React, { Component } from 'react';
import MyButton from '../utils/myButton';
import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {

  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    descriptions: ['this is Balcony this is Balcony this is Balcony this is Balcony this is Balcony ',
                  'This is Medium This is Medium This is Medium This is Medium This is Medium',
                  'This is Star This is Star This is Star This is Star This is Star This is Star '
    ],
    linkTo: ['#', '#', '#'],
    delay: [500, 0, 500]
  }

  showBoxes = () => (
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.descriptions[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                color='#fff'
                bck='#f00'
                link={this.state.linkTo[i]}/>
            </div>
          </div>

        </div>
      </Zoom>
      
    ))
  );

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
        
      </div>
    )
  }
}

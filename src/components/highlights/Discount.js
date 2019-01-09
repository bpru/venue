import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal";
import MyButton from "../utils/myButton";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide left>
            <div className="discount_description">
              <h3>Purchase Ticket Before Jan 15</h3>
              <p>
                This page is just for demo purpose. The button will lead you to
                the purchasing website, however, there is no discount available.
              </p>

              <MyButton
                link="https://www.iemshowplace.com/2/"
                text="Purchase Ticket"
                bck="red"
                color="white"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

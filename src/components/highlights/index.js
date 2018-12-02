import React, { Component } from 'react'
import Descriptions from './Descriptions';
import Discount from './Discount';

export default class Highlights extends Component {
  render() {
    return (
      <div className="highlight_wrapper">
        <Descriptions></Descriptions>
        <Discount></Discount>
      </div>
    )
  }
}

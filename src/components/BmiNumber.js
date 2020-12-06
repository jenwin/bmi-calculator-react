import React, { Component } from 'react';

class BmiNumber extends Component {
  render() {
    const { getBmi } = this.props;

    return (
      <div
        className="bmi-number-box"
        tabIndex="0"
        aria-label="bmi number">
          <div
            className="bmi-number"
            tabIndex="0">
              { getBmi }
          </div>
      </div>
    );
  }
}

export default BmiNumber;
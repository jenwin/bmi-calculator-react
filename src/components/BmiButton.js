import React, { Component } from 'react';
import {
  Button
} from 'react-bootstrap';

class BmiButton extends Component {
  handleResults = () => {
    this.props.handleResults();
  }

  render() {
    const { heightFeet, heightInches, weightPounds } = this.props;
    const disabled = (!heightFeet || !heightInches || !weightPounds ? true : false);

    return (
      <Button
        onClick={this.handleResults}
        className="results-btn"
        disabled={disabled}
        size="lg">
          <span
            className="results-text"
            tabIndex="0">
              Calculate
          </span>
      </Button>
    );
  }
}

export default BmiButton;
import React, { Component } from 'react';
import {
  Form
} from 'react-bootstrap';

class Weight extends Component {
  render() {
    const { weightPounds, handleBmi } = this.props;

    return (
      <div>
        { /*weight in pounds*/ }
        <Form.Label
          htmlFor="weight-lbs"
          tabIndex="0">
            Weight
        </Form.Label>
        <Form.Control
          id="weight-lbs"
          type="number"
          name="weightPounds"
          placeholder="Pounds"
          autoComplete="off"
          value={weightPounds}
          onChange={handleBmi}
          aria-label="pounds"
        />
      </div>
    );
  }
}

export default Weight;
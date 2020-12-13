import React, { Component } from 'react';
import {
  Form
} from 'react-bootstrap';

class Height extends Component {
  render() {
    const { heightFeet, heightInches, handleBmi } = this.props;

    return (
      <div>
        <Form.Label
          htmlFor="height-feet"
          tabIndex="0">
            Height
        </Form.Label>
        { /*height in feet*/ }
        <Form.Control
          id="height-feet"
          type="number"
          name="heightFeet"
          placeholder="Feet"
          autoComplete="off"
          value={heightFeet}
          onChange={handleBmi}
          aria-label="feet"
        />
        { /*height in inches*/ }
        <Form.Control
          id="height-inches"
          type="number"
          name="heightInches"
          placeholder="Inches"
          autoComplete="off"
          value={heightInches}
          onChange={handleBmi}
        />
      </div>
    );
  }
}

export default Height;
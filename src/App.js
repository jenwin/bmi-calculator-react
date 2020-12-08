import React, { Component } from 'react';
import UserResults from './components/UserResults';
import BmiNumber from './components/BmiNumber';
import BmiButton from './components/BmiButton';
import Footer from './components/Footer';
import {
  Form
} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightFeet: "",
      heightInches: "",
      weightPounds: "",
      results: ""
    }
    this.handleBmi = this.handleBmi.bind(this);
    this.handleResults = this.handleResults.bind(this);
  }

  handleBmi = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleResults = e => {
    const { heightFeet, heightInches, weightPounds } = this.state;
    const numHeightFeet = Number(heightFeet);
    const numHeightInches = Number(heightInches);
    const numWeightPounds = Number(weightPounds);
    const addAllHeight = ((numHeightFeet * 12) + numHeightInches);
    //total height in meters
    const totalHeight = Math.pow((addAllHeight) * 0.0254, 2);
    //total weight in kg
    const totalWeight = (numWeightPounds * 0.45);
    //total bmi
    const totalBMI = (totalWeight/totalHeight).toFixed(1);
    this.setState({
      results: totalBMI
    });
  }

  render() {
    const { heightFeet, heightInches, weightPounds, results } = this.state;

    return (
      <div>
        <p className="bmi-title" tabIndex="0" aria-label="title">BMI Calculator</p>
        <div className="bmi-box">
          <UserResults getBmi={results} />
          <BmiNumber getBmi ={results} />

          <Form onSubmit={this.handleBmi} tabIndex="0" aria-label="form">
            <Form.Group className="bmi-label">
              { /*get height in feet*/ }
              <Form.Label
                htmlFor="height-feet"
                tabIndex="0">
                  Height
              </Form.Label>
              <Form.Control
                id="height-feet"
                type="number"
                name="heightFeet"
                placeholder="Feet"
                autoComplete="off"
                value={this.state.heightFeet}
                onChange={this.handleBmi}
                aria-label="feet"
              />

              { /*get height in inches*/ }
              <Form.Control
                id="height-inches"
                type="number"
                name="heightInches"
                placeholder="Inches"
                autoComplete="off"
                value={this.state.heightInches}
                onChange={this.handleBmi}
               />
          </Form.Group>

          <Form.Group className="bmi-label">
            { /*get weight in pounds*/ }
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
              value={this.state.weightPounds}
              onChange={this.handleBmi}
              aria-label="pounds"
            />
          </Form.Group>
            <BmiButton
              heightFeet={heightFeet}
              heightInches={heightInches}
              weightPounds={weightPounds}
              handleResults={this.handleResults}
            />
          </Form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
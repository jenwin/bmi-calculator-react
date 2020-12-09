import React, { Component } from 'react';
import Height from './components/Height';
import Weight from './components/Weight';
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
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
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
        <p
          className="bmi-title"
          tabIndex="0"
          aria-label="title">
            BMI Calculator
        </p>
        <div className="bmi-box">
          <UserResults getBmi={results} />
          <BmiNumber getBmi ={results} />
          <Form
            onSubmit={this.handleBmi}
            tabIndex="0"
            aria-label="form">
              <Form.Group className="bmi-label">
                { /*height in feet and inches*/ }
                <Height
                  heightFeet={heightFeet}
                  heightInches={heightInches}
                  handleBmi={this.handleBmi}
                />
              </Form.Group>
              <Form.Group className="bmi-label">
                {/*weight in pounds*/}
                <Weight
                  weightPounds={weightPounds}
                  handleBmi={this.handleBmi}
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
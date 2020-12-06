import React, { Component } from 'react';

class UserResults extends Component {
  render() {
    const { getBmi } = this.props;

    function showStrBmi() {
      if (getBmi === "") {
        return 'Please Enter Your Info';
      } else if (getBmi < 18.5) {
        return 'You are underweight.';
      } else if (getBmi >= 18.5 && getBmi <= 24.9) {
        return 'You are healthy!';
      } else if (getBmi >= 25 && getBmi <= 29.9) {
        return 'You are overweight.';
      } else if (getBmi >= 30) {
       return 'You are obese.';
      }
    }

    return (
      <div className="bmi-str-box" tabIndex="0">
         <p className="bmi-str">
           { showStrBmi() }
         </p>
      </div>
    );
  }
}

export default UserResults;
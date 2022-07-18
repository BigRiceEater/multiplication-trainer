import React from "react";
import Choice from "./Choice";
import getNumber from "../util/getNumber.js";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [],
    };
    this.numChoices = 4;
  }

  createValues() {
    return Array(this.numChoices)
      .fill(0)
      .map(() => {
        const a = getNumber(1, 9);
        const b = getNumber(1, 9);
        return a * b;
      });
  }

  componentDidMount() {
    const { answer = 0 } = this.props;
    const replaceChoiceIndex = getNumber(0, 3);
    const choices = this.createValues();
    choices[replaceChoiceIndex] = answer;
    this.setState({ choices });
  }

  render() {
    const { onClick } = this.props;
    const { choices } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Choice value={choices[0]} onClick={onClick} />
          </div>
          <div className="col-md-6">
            <Choice value={choices[1]} onClick={onClick} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Choice value={choices[2]} onClick={onClick} />
          </div>
          <div className="col-md-6">
            <Choice value={choices[3]} onClick={onClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleChoice;

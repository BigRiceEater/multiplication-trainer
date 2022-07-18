import React from "react";
import Question from "./Question";
import MultipleChoice from "./MultipleChoice";

import getNumber from "../util/getNumber.js";

class Trainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operands: [0, 0],
      choices: [0, 0, 0, 0],
    };
    this.numChoices = 4;
  }

  componentDidMount() {
    this.refresh();
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

  refresh() {
    const { min = 1, max = 9 } = this.props;
    const a = getNumber(min, max);
    const b = getNumber(min, max);

    const choices = this.createValues();
    const answer = a * b;
    const replaceChoiceIndex = getNumber(0, 3);
    choices[replaceChoiceIndex] = answer;

    this.setState({ operands: [a, b], choices });
  }

  handleChoice = (value) => {
    this.refresh();
  };

  render() {
    const { operands, choices } = this.state;
    return (
      <React.Fragment>
        <Question operands={operands} />
        <MultipleChoice choices={choices} onClick={this.handleChoice} />
      </React.Fragment>
    );
  }
}

export default Trainer;

import React from "react";
import Question from "./Question";
import MultipleChoice from "./MultipleChoice";
import Clock from "./Clock";

import getNumber from "../util/getNumber.js";
import NextButton from "./NextButton";
import constants from "../util/constants";

class Trainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operands: [0, 0],
      choices: [0, 0, 0, 0],
      answerClicked: false,
      userClickedButtonIndex: 0,
      correctIndex: 0,
    };
    this.numChoices = 4;
  }

  componentDidMount() {
    this.refresh();
  }

  createValues() {
    return Array(this.numChoices)
      .fill(0)
      .map(() => this.generateValue());
  }

  generateValue() {
    return (
      getNumber(constants.absoluteMinOperand, constants.absoluteMaxOperand) *
      getNumber(constants.absoluteMinOperand, constants.absoluteMaxOperand)
    );
  }

  fixDuplicateAnswerInChoices(answer, choices) {
    const exists = choices.findIndex((item) => item === answer);
    if (exists > -1) {
      do {
        var newChoiceValue = this.generateValue();
        choices[exists] = newChoiceValue;
      } while (newChoiceValue === answer);
    }
  }

  refresh() {
    const { min = 1, max = 9, fixedOperand = 0 } = this.props;

    // if an operand is provided, this means we are training a specific timestable.
    const a = fixedOperand > 0 ? fixedOperand : getNumber(min, max);
    const b = getNumber(min, max);

    const choices = this.createValues();
    const answer = a * b;
    const replaceChoiceIndex = getNumber(0, 3);
    choices[replaceChoiceIndex] = answer;

    this.fixDuplicateAnswerInChoices(answer, choices);

    this.setState({
      operands: [a, b],
      choices,
      answerClicked: false,
      correctIndex: replaceChoiceIndex,
    });
  }

  handleChoice = (userClickedButtonIndex) => {
    this.setState({ answerClicked: true, userClickedButtonIndex });
    //this.refresh();
  };

  handleNextButtonClick = () => {
    this.refresh();
  };

  render() {
    const {
      operands,
      choices,
      answerClicked,
      correctIndex,
      userClickedButtonIndex,
    } = this.state;
    return (
      <React.Fragment>
        <Question operands={operands} />
        <MultipleChoice
          choices={choices}
          correctIndex={correctIndex}
          onClick={this.handleChoice}
          answerClicked={answerClicked}
          userClickedButtonIndex={userClickedButtonIndex}
          showCorrection={answerClicked}
        />
        <div className="container">
          <div className="row">
            <div className="col">
              <NextButton
                show={answerClicked}
                onClick={this.handleNextButtonClick}
              />
            </div>
          </div>
        </div>
        <Clock />
      </React.Fragment>
    );
  }
}

export default Trainer;

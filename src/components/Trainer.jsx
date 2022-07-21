import React from "react";
import Question from "./Question";
import MultipleChoice from "./MultipleChoice";

import getNumber from "../util/getNumber.js";
import NextButton from "./NextButton";

class Trainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operands: [0, 0],
      choices: [0, 0, 0, 0],
      answerClicked: false,
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

    this.setState({
      operands: [a, b],
      choices,
      answerClicked: false,
      correctIndex: replaceChoiceIndex,
    });
  }

  handleChoice = (value) => {
    this.setState({ answerClicked: true });
    //this.refresh();
  };

  handleNextButtonClick = () => {
    this.refresh();
  };

  render() {
    const { operands, choices, answerClicked, correctIndex } = this.state;
    return (
      <React.Fragment>
        <Question operands={operands} />
        <MultipleChoice
          choices={choices}
          correctIndex={correctIndex}
          onClick={this.handleChoice}
          answerClicked={answerClicked}
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
      </React.Fragment>
    );
  }
}

export default Trainer;

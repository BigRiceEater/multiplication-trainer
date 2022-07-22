import React from "react";
import Question from "./Question";
import MultipleChoice from "./MultipleChoice";
import Clock from "./Clock";

import getNumber from "../util/getNumber.js";
import NextButton from "./NextButton";

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

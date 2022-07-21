import React from "react";
import { Choice, BUTTON_STATE } from "./Choice";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.numRows = 2;
    this.numCols = 2;
  }

  ButtonItems = () => {
    const {
      choices,
      onClick,
      answerClicked,
      correctIndex,
      showCorrection,
      userClickedButtonIndex,
    } = this.props;

    const elements = [];

    for (let i = 0; i < 4; i++) {
      elements.push(
        <Choice
          value={choices[i]}
          index={i}
          onClick={onClick}
          disabled={answerClicked}
          highlight={
            showCorrection
              ? correctIndex == i
                ? BUTTON_STATE.correct
                : userClickedButtonIndex == i
                ? BUTTON_STATE.wrong
                : BUTTON_STATE.default
              : BUTTON_STATE.default
          }
        />
      );
    }
    return elements;
  };

  render() {
    const buttons = this.ButtonItems();

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">{buttons[0]}</div>
          <div className="col-md-6">{buttons[1]}</div>
        </div>
        <div className="row">
          <div className="col-md-6">{buttons[2]}</div>
          <div className="col-md-6">{buttons[3]}</div>
        </div>
      </div>
    );
  }
}

export default MultipleChoice;

import React from "react";
import { Choice, BUTTON_STATE } from "./Choice";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.numButtons = 4;
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

    for (let index = 0; index < this.numButtons; index++) {
      elements.push(
        <Choice
          value={choices[index]}
          index={index}
          onClick={onClick}
          disabled={answerClicked}
          highlight={
            showCorrection
              ? correctIndex == index
                ? BUTTON_STATE.correct
                : userClickedButtonIndex == index
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

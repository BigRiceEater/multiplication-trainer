import React from "react";
import { Choice, BUTTON_STATE } from "./Choice";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { choices, onClick, answerClicked, correctIndex, showCorrection } =
      this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Choice
              value={choices[0]}
              onClick={onClick}
              disabled={answerClicked}
              highlight={
                showCorrection
                  ? correctIndex == 0
                    ? BUTTON_STATE.correct
                    : BUTTON_STATE.wrong
                  : BUTTON_STATE.default
              }
            />
          </div>
          <div className="col-md-6">
            <Choice
              value={choices[1]}
              onClick={onClick}
              disabled={answerClicked}
              highlight={
                showCorrection
                  ? correctIndex == 1
                    ? BUTTON_STATE.correct
                    : BUTTON_STATE.wrong
                  : BUTTON_STATE.default
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Choice
              value={choices[2]}
              onClick={onClick}
              disabled={answerClicked}
              highlight={
                showCorrection
                  ? correctIndex == 2
                    ? BUTTON_STATE.correct
                    : BUTTON_STATE.wrong
                  : BUTTON_STATE.default
              }
            />
          </div>
          <div className="col-md-6">
            <Choice
              value={choices[3]}
              onClick={onClick}
              disabled={answerClicked}
              highlight={
                showCorrection
                  ? correctIndex == 3
                    ? BUTTON_STATE.correct
                    : BUTTON_STATE.wrong
                  : BUTTON_STATE.default
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleChoice;

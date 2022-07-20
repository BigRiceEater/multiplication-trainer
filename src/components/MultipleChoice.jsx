import React from "react";
import Choice from "./Choice";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { choices, onClick, answerClicked } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Choice
              value={choices[0]}
              onClick={onClick}
              disabled={answerClicked}
            />
          </div>
          <div className="col-md-6">
            <Choice
              value={choices[1]}
              onClick={onClick}
              disabled={answerClicked}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Choice
              value={choices[2]}
              onClick={onClick}
              disabled={answerClicked}
            />
          </div>
          <div className="col-md-6">
            <Choice
              value={choices[3]}
              onClick={onClick}
              disabled={answerClicked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleChoice;

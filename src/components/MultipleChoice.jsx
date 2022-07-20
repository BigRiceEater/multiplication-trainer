import React from "react";
import Choice from "./Choice";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { choices, onClick } = this.props;

    return (
      <div className="container">
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

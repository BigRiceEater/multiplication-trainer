import React from "react";
import Choice from "./Choice";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Choice value="Option 1" onClick={onClick} />
          </div>
          <div className="col-md-6">
            <button className="btn-primary">Option 2</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button className="btn-primary">Option 1</button>
          </div>
          <div className="col-md-6">
            <button className="btn-primary">Option 2</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleChoice;

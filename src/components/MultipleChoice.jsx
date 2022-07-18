import React from "react";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onclick } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <button className="btn-primary" onClick={onclick}>
              Option 1
            </button>
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

import React from "react";
import constants from "./../util/constants";

class NumberRangeSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "min-operand-input":
        this.props.defaultMin || constants.absoluteMinOperand,
      "max-operand-input":
        this.props.defaultMax || constants.absoluteMaxOperand,
    };
  }

  handleValueChanged = (event) => {
    const {
      target: { id, value },
    } = event;

    const newState = { [id]: Number(value) };

    if (id === "min-operand-input" && this.state["max-operand-input"] < value) {
      newState["max-operand-input"] = value;
    }

    this.setState(newState, () => {
      const { onValueChanged } = this.props;

      if (onValueChanged) {
        onValueChanged({
          max: this.state["max-operand-input"],
          min: this.state["min-operand-input"],
        });
      }
    });
  };

  render() {
    const { "min-operand-input": min, "max-operand-input": max } = this.state;
    return (
      <div className="container">
        <div className="mb-3 row">
          <div className="col-sm-4">
            <label className="form-control-label">Range</label>
          </div>
          <div className="col-sm-4">
            <input
              id="min-operand-input"
              type="number"
              className="form-control"
              onChange={this.handleValueChanged}
              min={constants.absoluteMinOperand}
              max={constants.absoluteMaxOperand}
              value={min}
            />
          </div>
          <div className="col-sm-4">
            <input
              id="max-operand-input"
              type="number"
              className="form-control"
              min={min}
              max={constants.absoluteMaxOperand}
              value={max}
              onChange={this.handleValueChanged}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NumberRangeSelection;

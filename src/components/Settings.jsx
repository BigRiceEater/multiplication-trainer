import React from "react";
import NumberSelection from "./NumberSelection";

import elementIDFromLabel from "../util/elementIDFromLabel";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.settings = ["Minimum Operand", "Maximum Operand"];

    const constructState = {};
    this.settings.forEach(
      (label) =>
        (constructState[`${elementIDFromLabel(label)}`] =
          this.props.defaultValues[`${elementIDFromLabel(label)}`])
    );

    this.state = constructState;
  }

  handleValueChanged = (elementID, value) => {
    this.setState({ [elementID]: Number(value) });
  };

  render() {
    const { onConfirm } = this.props;
    return (
      <div className="container my-5">
        <form>
          {this.settings.map((label) => (
            <NumberSelection
              key={label}
              label={label}
              onChange={this.handleValueChanged}
              defaultValue={this.state[`${elementIDFromLabel(label)}`]}
            />
          ))}
        </form>
        <button
          className="btn btn-success w-50"
          type="button"
          onClick={() => onConfirm(this.state)}
        >
          Set
        </button>
      </div>
    );
  }
}

export default Settings;

import React from "react";
import NumberSelection from "./NumberSelection";

import elementIDFromLabel from "../util/elementIDFromLabel";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      [`${elementIDFromLabel("Minimum Operand")}`]: 1,
    };
  }

  handleValueChanged = (elementID, value) => {
    this.setState({ [elementID]: Number(value) });
  };

  render() {
    const { onConfirm } = this.props;
    return (
      <div className="container my-5">
        <form>
          <NumberSelection
            label="Minimum Operand"
            onChange={this.handleValueChanged}
          />
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

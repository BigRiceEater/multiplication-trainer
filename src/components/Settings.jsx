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
    return (
      <div className="container my-5">
        <form>
          <NumberSelection
            label="Minimum Operand"
            onChange={this.handleValueChanged}
          />
        </form>
      </div>
    );
  }
}

export default Settings;

import React from "react";
import NumberSelection from "./NumberSelection";
import NumberRangeSelection from "./NumberRangeSelection";
import constants from "../util/constants";

import elementIDFromLabel from "../util/elementIDFromLabel";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max: constants.absoluteMaxOperand,
      min: constants.absoluteMinOperand,
    };
  }

  handleValueChanged = (elementID, value) => {
    this.setState({ [elementID]: Number(value) });
  };

  handleRangeChanged = (values) => {
    this.setState({ max: values.max, min: values.min }, () => {
      const { onChange } = this.props;
      if (onChange) {
        onChange({ max: this.state.max, min: this.state.min });
      }
    });
  };

  render() {
    return (
      <div className="container my-5">
        <form>
          {/* {this.settings.map((label) => (
            <NumberSelection
              key={label}
              label={label}
              onChange={this.handleValueChanged}
              defaultValue={this.state[`${elementIDFromLabel(label)}`]}
            />
          ))} */}
          <NumberRangeSelection onValueChanged={this.handleRangeChanged} />
        </form>
      </div>
    );
  }
}

export default Settings;

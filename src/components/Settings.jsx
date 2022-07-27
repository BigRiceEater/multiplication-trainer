import React from "react";
import NumberSelection from "./NumberSelection";
import NumberRangeSelection from "./NumberRangeSelection";
import constants from "../util/constants";

import elementIDFromLabel from "../util/elementIDFromLabel";

class Settings extends React.Component {
  constructor(props) {
    super(props);

    const { defaultValues: { max, min } = {} } = this.props;

    this.state = {
      max: max || constants.absoluteMaxOperand,
      min: min || constants.absoluteMinOperand,
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
    const { max, min } = this.state;
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
          <NumberRangeSelection
            defaultMin={min}
            defaultMax={max}
            onValueChanged={this.handleRangeChanged}
          />
        </form>
      </div>
    );
  }
}

export default Settings;

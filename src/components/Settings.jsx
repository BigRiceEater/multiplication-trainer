import React from "react";
import NumberSelection from "./NumberSelection";
import NumberRangeSelection from "./NumberRangeSelection";
import Toggle from "./Toggle";
import constants from "../util/constants";

import elementIDFromLabel from "../util/elementIDFromLabel";

class Settings extends React.Component {
  constructor(props) {
    super(props);

    const { defaultValues: { max, min, multiplier } = {} } = this.props;

    this.state = {
      max: max || constants.absoluteMaxOperand,
      min: min || constants.absoluteMinOperand,
      multiplier: multiplier || 0,
    };
  }

  handleRangeChanged = (values) => {
    this.setState(
      { max: values.max, min: values.min },
      this.passValueChangeToParentComponent
    );
  };

  handleSpecificMultiplierChanged = (value) => {
    this.setState({ multiplier: value }, this.passValueChangeToParentComponent);
  };

  passValueChangeToParentComponent() {
    const { onChange } = this.props;
    if (onChange) {
      onChange(this.state);
    }
  }

  render() {
    const { max, min, multiplier } = this.state;
    return (
      <div className="container my-5">
        <form>
          <NumberRangeSelection
            defaultMin={min}
            defaultMax={max}
            onValueChanged={this.handleRangeChanged}
          />

          <Toggle label="Train Specific Multipler" />

          <NumberSelection
            label="Specific Multiplier"
            defaultValue={multiplier}
            onChange={this.handleSpecificMultiplierChanged}
            isDisabled={false}
          />
        </form>
      </div>
    );
  }
}

export default Settings;

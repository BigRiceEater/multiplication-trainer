import React, { useState } from "react";
import NumberSelection from "./NumberSelection";
import NumberRangeSelection from "./NumberRangeSelection";
import Toggle from "./Toggle";
import constants from "../util/constants";

import elementIDFromLabel from "../util/elementIDFromLabel";

function Settings(props) {
  const {
    max: defaultMax = constants.absoluteMaxOperand,
    min: defaultMin = constants.absoluteMinOperand,
    multiplier: iniMultiplier = 1,
    isTrainingSpecificMultiplier: iniIsTrainingSpecificMultiplier = false,
  } = ({} = props);

  const [range, setRange] = useState({ max: defaultMax, min: defaultMin });
  const [multiplier, setMultiplier] = useState(iniMultiplier);
  const [isTrainingSpecificMultiplier, setIsTrainingSpecificMultiplier] =
    useState(iniIsTrainingSpecificMultiplier);

  const handleRangeChanged = (values) => {
    setRange(
      { max: values.max, min: values.min },
      passValueChangeToParentComponent
    );
  };

  const handleSpecificMultiplierChanged = (value) => {
    setMultiplier(value, passValueChangeToParentComponent);
  };

  const handleTrainMultiplierCheckboxChanged = (value) => {
    setIsTrainingSpecificMultiplier(value, passValueChangeToParentComponent);
  };

  const passValueChangeToParentComponent = () => {
    const { onChange } = props;
    if (onChange) {
      onChange({
        max: range.max,
        min: range.min,
        multiplier,
        isTrainingSpecificMultiplier,
      });
    }
  };

  return (
    <div className="container my-5">
      <form>
        <NumberRangeSelection
          defaultMin={range.min}
          defaultMax={range.max}
          onValueChanged={handleRangeChanged}
        />

        <Toggle
          label="Specific Multiplier"
          onChange={handleTrainMultiplierCheckboxChanged}
          checked={isTrainingSpecificMultiplier}
        />

        <NumberSelection
          label="Multiplier"
          defaultValue={multiplier}
          onChange={handleSpecificMultiplierChanged}
          isDisabled={!isTrainingSpecificMultiplier}
        />
      </form>
    </div>
  );
}

export default Settings;

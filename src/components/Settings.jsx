import React, { useState, useEffect } from "react";
import NumberSelection from "./NumberSelection";
import NumberRangeSelection from "./NumberRangeSelection";
import Toggle from "./Toggle";
import constants from "../util/constants";

import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../features/settings/specificMutliplierSlice";

import elementIDFromLabel from "../util/elementIDFromLabel";

function Settings(props) {
  const dispatch = useDispatch();

  const {
    max: defaultMax = constants.absoluteMaxOperand,
    min: defaultMin = constants.absoluteMinOperand,
    multiplier: iniMultiplier = 1,
  } = ({} = props);

  const [range, setRange] = useState({ max: defaultMax, min: defaultMin });
  const [multiplier, setMultiplier] = useState(iniMultiplier);
  const isTrainingSpecificMultiplier = useSelector(
    (state) => state.specificMultiplier.value
  );

  const handleRangeChanged = (values) => {
    setRange({ max: values.max, min: values.min });
  };

  const handleSpecificMultiplierChanged = (value) => {
    setMultiplier(value);
  };

  const handleTrainMultiplierCheckboxChanged = (value) => {
    dispatch(toggle());
  };

  const passValueChangeToParentComponent = () => {
    const { onChange } = props;
    if (onChange) {
      onChange({
        max: range.max,
        min: range.min,
        multiplier,
      });
    }
  };

  useEffect(passValueChangeToParentComponent, [
    range,
    multiplier,
    isTrainingSpecificMultiplier,
  ]);

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

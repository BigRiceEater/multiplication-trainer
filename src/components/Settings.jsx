import React from "react";
import NumberSelection from "./NumberSelection";
import NumberRangeSelection from "./NumberRangeSelection";
import Toggle from "./Toggle";

import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  setMultiplierValue,
} from "../features/settings/specificMutliplierSlice";
import { setRange } from "../features/settings/rangeSlice";

function Settings() {
  const dispatch = useDispatch();

  const multiplier = useSelector((state) => state.specificMultiplier.value);
  const max = useSelector((state) => state.range.max);
  const min = useSelector((state) => state.range.min);

  const isTrainingSpecificMultiplier = useSelector(
    (state) => state.specificMultiplier.checked
  );

  const handleRangeChanged = (values) => {
    dispatch(setRange(values));
  };

  const handleSpecificMultiplierChanged = (value) => {
    dispatch(setMultiplierValue(value));
  };

  const handleTrainMultiplierCheckboxChanged = (value) => {
    dispatch(toggle());
  };

  return (
    <div className="container my-5">
      <form>
        <NumberRangeSelection
          defaultMin={min}
          defaultMax={max}
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

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
    defaultValues: { max, min, multiplier },
  } = props || {};

  const isTrainingSpecificMultiplier = useSelector(
    (state) => state.specificMultiplier.checked
  );

  const handleRangeChanged = (values) => {
    passValueChangeToParentComponent({
      max: values.max,
      min: values.min,
      multiplier,
    });
  };

  const handleSpecificMultiplierChanged = (value) =>
    passValueChangeToParentComponent({ max, min, multiplier: value });

  const handleTrainMultiplierCheckboxChanged = (value) => {
    dispatch(toggle());
  };

  const passValueChangeToParentComponent = (values) => {
    const { onChange } = props;
    if (onChange) {
      onChange(values);
    }
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

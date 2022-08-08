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

  const max = useSelector((state) => state.range.max);
  const min = useSelector((state) => state.range.min);

  const multiplier = useSelector((state) => state.specificMultiplier.value);
  const multiplierChecked = useSelector(
    (state) => state.specificMultiplier.checked
  );

  return (
    <div className="container my-5">
      <form>
        <NumberRangeSelection
          defaultMin={min}
          defaultMax={max}
          onValueChanged={(values) => dispatch(setRange(values))}
        />

        <Toggle
          label="Specific Multiplier"
          onChange={() => dispatch(toggle())}
          checked={multiplierChecked}
        />

        <NumberSelection
          label="Multiplier"
          defaultValue={multiplier}
          onChange={(value) => dispatch(setMultiplierValue(value))}
          isDisabled={!multiplierChecked}
        />
      </form>
    </div>
  );
}

export default Settings;

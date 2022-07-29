import elementIDFromLabel from "../util/elementIDFromLabel";
import constants from "../util/constants";

function NumberSelection({
  isDisabled = false,
  label,
  defaultValue = constants.absoluteMinOperand,
  onChange,
}) {
  const elementID = elementIDFromLabel(label);
  return (
    <div className="mb-3 row">
      <label htmlFor={elementID} className="col-sm-4">
        {label}
      </label>
      <div className="col-sm-8">
        <input
          disabled={isDisabled}
          type="number"
          className="form-control"
          id={elementID}
          min={constants.absoluteMinOperand}
          max={constants.absoluteMaxOperand}
          defaultValue={defaultValue}
          onChange={(event) => onChange(Number(event.target.value), elementID)}
        />
      </div>
    </div>
  );
}

export default NumberSelection;

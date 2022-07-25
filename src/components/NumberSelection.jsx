import elementIDFromLabel from "../util/elementIDFromLabel";

function NumberSelection({ label, defaultValue = 1, onChange }) {
  const elementID = elementIDFromLabel(label);
  return (
    <div className="mb-3 row">
      <label htmlFor={elementID} className="col-sm-4">
        {label}
      </label>
      <div className="col-sm-8">
        <input
          type="number"
          className="form-control"
          id={elementID}
          min="1"
          max="12"
          defaultValue={defaultValue}
          onChange={(event) => onChange(elementID, event.target.value)}
        />
      </div>
    </div>
  );
}

export default NumberSelection;

function NumberSelection({ label, defaultValue = 1 }) {
  const elementID = `${label.toLowerCase().replaceAll(" ", "-")}-input`;
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
        />
      </div>
    </div>
  );
}

export default NumberSelection;

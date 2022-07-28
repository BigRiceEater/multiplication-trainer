import { useState, useEffect } from "react";

function Toggle({ label, checked = false, onChange }) {
  const [checkedValue, setChecked] = useState(false);

  // only run the effect if dependencies change, in this case an empty array means there will never be any changes
  // so mimics componentDidMount.
  // Not providing any second param means useEffect is a combination of componentDidMount/DidUpdate

  useEffect(() => setChecked(checked), []);

  const handleChange = () => {
    const newValue = !checkedValue;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="row">
      <div className="col-sm-4">{label}</div>
      <div className="col-sm-8">
        <input
          type="checkbox"
          className="form-check-input"
          checked={checkedValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Toggle;

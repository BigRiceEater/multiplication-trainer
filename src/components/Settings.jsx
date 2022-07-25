import React from "react";
import NumberSelection from "./NumberSelection";

class Settings extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <form>
          <NumberSelection label="Minimum Operand" />
        </form>
      </div>
    );
  }
}

export default Settings;

import React from "react";

class Choice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const appearance = "btn-secondary";
    const style = `btn ${appearance} w-100`;
    const { value, onClick, disabled } = this.props;
    return (
      <button
        className={style}
        onClick={() => onClick(value)}
        disabled={disabled}
      >
        {value}
      </button>
    );
  }
}

export default Choice;

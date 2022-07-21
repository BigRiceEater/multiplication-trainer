import React from "react";

class Choice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      value,
      onClick,
      disabled,
      highlight = BUTTON_STATE.default,
      index,
    } = this.props;

    const style = `btn ${highlight} w-100`;
    return (
      <button
        className={style}
        onClick={() => onClick(index)}
        disabled={disabled}
      >
        {value}
      </button>
    );
  }
}

const BUTTON_STATE = {
  default: "btn-secondary",
  correct: "btn-success",
  wrong: "btn-danger",
};

export { Choice, BUTTON_STATE };

import React from "react";

class NextButton extends React.Component {
  render() {
    const { show, onClick } = this.props;
    const style = `btn btn-secondary w-100 ${show ? "visible" : "invisible"}`;
    return (
      <button className={style} onClick={onClick}>
        Next
      </button>
    );
  }
}

export default NextButton;

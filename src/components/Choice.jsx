import React from "react";

class Choice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const appearance = "btn-secondary";
    const style = `btn ${appearance}`;
    const { value, onClick } = this.props;
    return (
      <button className={style} onClick={() => onClick(value)}>
        {value}
      </button>
    );
  }
}

export default Choice;

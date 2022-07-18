import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { operands } = this.props;
    return (
      <h1>
        What is {operands[0]} x {operands[1]} ?
      </h1>
    );
  }
}

export default Question;

import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operands: [0, 0],
    };
  }

  getNumber(min, max) {
    return Math.ceil(Math.random() * max + min);
  }

  refresh() {
    const { min = 1, max = 9 } = this.props;
    const a = this.getNumber(min, max);
    const b = this.getNumber(min, max);
    this.setState({
      operands: [a, b],
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    const { operands } = this.state;
    return (
      <span>
        What is {operands[0]} x {operands[1]} ?
      </span>
    );
  }
}

export default Question;

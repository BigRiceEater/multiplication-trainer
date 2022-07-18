import React from "react";
import Question from "./Question";

class Trainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operands: [0, 0],
    };
  }

  componentDidMount() {
    this.refresh();
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

  render() {
    const { operands } = this.state;
    return (
      <React.Fragment>
        <Question operands={operands} />
      </React.Fragment>
    );
  }
}

export default Trainer;

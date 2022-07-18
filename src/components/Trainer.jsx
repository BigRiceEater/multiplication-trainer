import React from "react";
import Question from "./Question";
import MultipleChoice from "./MultipleChoice";

import getNumber from "../util/getNumber.js";

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

  refresh() {
    const { min = 1, max = 9 } = this.props;
    const a = getNumber(min, max);
    const b = getNumber(min, max);
    this.setState({
      operands: [a, b],
    });
  }

  handleChoice = (value) => {
    console.log(value);
    this.refresh();
  };

  render() {
    const { operands } = this.state;
    return (
      <React.Fragment>
        <Question operands={operands} />
        <MultipleChoice onClick={this.handleChoice} />
      </React.Fragment>
    );
  }
}

export default Trainer;

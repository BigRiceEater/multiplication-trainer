import React from "react";
import moment from "moment";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: 0,
    };
  }

  componentDidMount() {
    // we don't add timerID to this.state because it doesn't actually take part in the data flow or change,
    // we are free to add variables directly to the class component instead since it don't change
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ timeElapsed: ++this.state.timeElapsed });
  }

  render() {
    const { timeElapsed } = this.state;
    return <div>Current running time : {timeElapsed}</div>;
  }
}

export default Clock;

import React from "react";
import moment from "moment";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: moment().diff(),
    };
  }

  componentDidMount() {
    // we don't add timerID to this.state because it doesn't actually take part in the data flow or change,
    // we are free to add variables directly to the class component instead since it don't change
    this.timerID = setInterval(() => this.tick(), 1000);
    this.startTime = moment();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ timeElapsed: moment().diff(this.startTime) });
  }

  formatTimeDisplay(time) {
    return moment(time).format("mm:ss");
  }

  render() {
    const { timeElapsed } = this.state;
    return (
      <div>Current running time : {this.formatTimeDisplay(timeElapsed)}</div>
    );
  }
}

export default Clock;

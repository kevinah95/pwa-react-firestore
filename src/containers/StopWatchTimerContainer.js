import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

const formattedSeconds = sec =>
  ("0" + Math.floor((sec % 3600) / 60)).slice(-2) +
  ":" +
  ("0" + (sec % 60)).slice(-2);

const TimeElapsedFormatted = ({secondsElapsed}) => (
    <Fragment>{formattedSeconds(secondsElapsed)}</Fragment>
)

class StopWatchTimer extends Component {
  state = {
    secondsElapsed: 0
  };

  constructor(props) {
    super(props);
    this.incrementer = null;
  }

  stopTimer() {
    if (this.incrementer !== null) {
      clearInterval(this.incrementer);
      this.setState({
        secondsElapsed: 0
      });
    }
  }
  incrementTimer() {
    this.incrementer = setInterval(
      () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        }),
      1000
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.timer.isOn !== prevProps.timer.isOn) {
      if (this.props.timer.isOn) {
        this.incrementTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  render() {
    return (
      <Fragment>
        <span>Time</span>
        <h1 className="title has-text-centered">
          <TimeElapsedFormatted secondsElapsed={this.state.secondsElapsed} />
        </h1>
      </Fragment>
    );
  }
}

const mapStateToStopWatchTimerProps = state => {
  return {
    timer: state.timer
  };
};

const StopWatchTimerContainer = connect(mapStateToStopWatchTimerProps)(
  StopWatchTimer
);

export default StopWatchTimerContainer;

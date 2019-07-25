import { Component } from "react";
import ShowDailySchedule from "./ShowDailySchedule";

interface IProps {
  currDay: string;
  slots: {};
}
class Day extends Component<IProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  showSchedule = () => {
    if (this.state.clicked) {
      this.setState({
        clicked: false
      });
    } else {
      this.setState({
        clicked: true
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.clicked && (
          <div>
            <ShowScheduleButton
              showSchedule={this.showSchedule}
              day={this.props.currDay}
              timeStart={this.props.slots[0].timeStart}
              slots={this.props.slots}
              clicked={this.state.clicked}
            />
          </div>
        )}
        {!this.state.clicked && (
          <ShowScheduleButton
            showSchedule={this.showSchedule}
            day={this.props.currDay}
            timeStart={this.props.slots[0].timeStart}
            slots={this.props.slots}
            clicked={this.state.clicked}
          />
        )}
      </div>
    );
  }
}

const ShowScheduleButton = props => {
  if (props.clicked) {
    return (
      <ShowDailySchedule
        day={props.day}
        slots={props.slots}
        showSchedule={props.showSchedule}
        timeStart={props.timeStart}
      />
    );
  } else {
    if (props.day == "Fredag") {
      return (
        <button
          className="day-button"
          id="arrow-right"
          type="submit"
          onClick={props.showSchedule}
        >
          <h2>FRIDAY , 12th</h2>
          <div className="right-arrow">
            <img
              className="baseline-chevron"
              src="../../static/baseline-chevron_right.svg"
            />
          </div>
        </button>
      );
    } else {
      return (
        <button
          className="day-button"
          id="arrow-right"
          type="submit"
          onClick={props.showSchedule}
        >
          <h2>SATURDAY , 13th</h2>
          <div className="right-arrow">
            <img
              className="baseline-chevron"
              src="../../static/baseline-chevron_right.svg"
            />
          </div>
        </button>
      );
    }
  }
};

export default Day;

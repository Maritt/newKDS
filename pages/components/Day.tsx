import { Component } from "react";
import ScheduleEntry from "./ScheduleEntry";

class Day extends Component<{}, any> {
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
    console.log(this.state.clicked);
  };

  render() {
    return (
      <div>
        {this.state.clicked && (
          <div>
            <ShowScheduleButton
              showSchedule={this.showSchedule}
              day="FRIDAY , 12th"
            />
            <ScheduleEntry />
            <p>test</p>
          </div>
        )}
        {!this.state.clicked && (
          <ShowScheduleButton
            showSchedule={this.showSchedule}
            day="FRIDAY , 12th"
          />
        )}
      </div>
    );
  }
}

const ShowScheduleButton = props => {
  return (
    <button className="day-button" type="submit" onClick={props.showSchedule}>
      <h2>{props.day}</h2>
      <img
        id="baseline-chevron"
        src="../../static/baseline-chevron_right.svg"
      />
    </button>
  );
};

export default Day;

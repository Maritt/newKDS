import { Component } from "react";
import ScheduleEntry from "./ScheduleEntry";

interface IProps {
  day: string;
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
              day={this.props.day}
              clicked={this.state.clicked}
            />
            <ScheduleEntry
              eventTime="09:00"
              title="Morning Test talk title"
              speaker="Test Testesen"
              room="Room C3"
              type="Short talk"
              language="English"
            />
            <ScheduleEntry
              eventTime="12:00"
              title="Midday Test talk title "
              speaker="Test Testesen"
              room="Room C5"
              type="Short talk"
              language="Norwegian"
            />
          </div>
        )}
        {!this.state.clicked && (
          <ShowScheduleButton
            showSchedule={this.showSchedule}
            day={this.props.day}
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
      <button className="day-button" type="submit" onClick={props.showSchedule}>
        <h2>{props.day}</h2>
        <div className="right-arrow">
          <img id="baseline-chevron" src="../../static/arrow_down.svg" />
        </div>
      </button>
    );
  } else {
    return (
      <button className="day-button" type="submit" onClick={props.showSchedule}>
        <h2>{props.day}</h2>
        <div className="right-arrow">
          <img
            id="baseline-chevron"
            src="../../static/baseline-chevron_right.svg"
          />
        </div>
      </button>
    );
  }
};

export default Day;

import ScheduleEntry from "./ScheduleEntry";
import EventHeader from "./EventHeader";

const ShowDailySchedule = props => {
  if (props.day == "FRIDAY , 12th") {
    return (
      <div>
        <button
          className="day-button"
          type="submit"
          onClick={props.showSchedule}
        >
          <h2>{props.day}</h2>
          <div className="right-arrow">
            <img
              className="baseline-chevron"
              src="../../static/arrow_down.svg"
            />
          </div>
        </button>

        <ScheduleEntry
          eventTime="09:00"
          title="Morning Test talk title"
          speaker="Test Testesen"
          room="Room C3"
          type="Short talk"
          language="English"
          difficulty="Intermediate"
        />
        <EventHeader eventTime="11:00" eventName="Lunch" />
        <ScheduleEntry
          eventTime="12:00"
          title="Midday Test talk title "
          speaker="Test Testesen"
          room="Room C5"
          type="Short talk"
          language="Norwegian"
          difficulty="Expert"
        />
      </div>
    );
  } else {
    return (
      <div>
        <button
          className="day-button"
          type="submit"
          onClick={props.showSchedule}
        >
          <h2>{props.day}</h2>
          <div className="right-arrow">
            <img
              className="baseline-chevron"
              src="../../static/arrow_down.svg"
            />
          </div>
        </button>

        <ScheduleEntry
          eventTime="09:00"
          title="Morning Test talk title"
          speaker="Test Testesen"
          room="Room C3"
          type="Short talk"
          language="English"
          difficulty="Intermediate"
        />
        <EventHeader eventTime="11:30" eventName="Lunch" />
        <ScheduleEntry
          eventTime="12:00"
          title="Midday Test talk title "
          speaker="Test Testesen"
          room="Room C5"
          type="Short talk"
          language="Norwegian"
          difficulty="Expert"
        />
      </div>
    );
  }
};

export default ShowDailySchedule;

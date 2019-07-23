import Talk from "./Talk";
import EventHeader from "./EventHeader";
import Day from "./Day";

export default function ScheduleEntry(props) {
  return (
    <div className="content">
      <Day day="FRIDAY , 12th" />
      <div className="session">
        <EventHeader eventHeader="Morning session" eventTime="11:00" />
        <Talk
          title="Test talk title"
          speaker="Test Testesen"
          room="Room C3"
          type="Short talk"
          language="English"
          eventTime={props.eventTime}
        />
        <Talk
          title="Test talk 2 titlte"
          speaker="Testete testesen"
          room="Room 24"
          type="Short talk"
          language="English"
          eventTime={props.eventTime}
        />
      </div>
      <Day day="SATURDAY , 13th" />
    </div>
  );
}

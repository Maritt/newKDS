import Talk from "./Talk";
import EventHeader from "./EventHeader";

const ScheduleEntry = props => {
  return (
    <div className="content">
      <EventHeader eventHeader="Morning session" eventTime="11:00" />
      <Talk
        title="Test talk title"
        speaker="Test Testesen"
        room="Room C3"
        type="Short talk"
        language="English"
        eventTime="11:00"
      />
      <Talk
        title="Test talk 2 titlte"
        speaker="Testete testesen"
        room="Room 24"
        type="Short talk"
        language="English"
        eventTime="11:00"
      />
    </div>
  );
};
export default ScheduleEntry;

import Talk from "./Talk";
import EventHeader from "./EventHeader";

const ScheduleEntry = props => {
  return (
    <div className="content">
      <EventHeader eventTime={props.eventTime} />
      <Talk
        title={props.title}
        speaker={props.speaker}
        room={props.room}
        type={props.type}
        language={props.language}
      />
      <Talk
        title="Test talk 2 titlte"
        speaker="Testete testesen"
        room="Room 24"
        type="Short talk"
        language="English"
      />
    </div>
  );
};
export default ScheduleEntry;

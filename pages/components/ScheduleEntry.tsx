import Talk from "./Talk";
import EventHeader from "./EventHeader";

const ScheduleEntry = props => {
  return (
    <div className="content">
      <EventHeader eventTime={props.eventTime} eventName={props.EventName} />
      <div className="talk-slot">
        <Talk
          title={props.title}
          speaker={props.speaker}
          room={props.room}
          type={props.type}
          language={props.language}
          difficulty={props.difficulty}
        />
        <Talk
          title="Test talk 2 titlte"
          speaker="Testete testesen"
          room="Room 24"
          type="Short talk"
          language="English"
          difficulty="Beginner"
        />
        <Talk
          title="Test talk 2 titlte"
          speaker="Testete testesen"
          room="Room 24"
          type="Short talk"
          language="English"
          difficulty="Beginner"
        />
        <Talk
          title="Test talk 2 titlte"
          speaker="Testete testesen"
          room="Room 24"
          type="Short talk"
          language="English"
          difficulty="Beginner"
        />
      </div>
    </div>
  );
};
export default ScheduleEntry;

export default function ScheduleEntry(props) {
  return (
    <div className="content">
      <h2>Friday</h2>
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
    </div>
  );
}

const EventHeader = props => {
  return (
    <div>
      <h3>{props.eventHeader}</h3>
      <p>{props.eventTime}</p>
    </div>
  );
};

const Talk = props => {
  return (
    <div className="talk-container">
      <h3 id="title">{props.title}</h3>
      <p id="speaker">{props.speaker}</p>
      <div className="talk-info">
        <p id="room" className="info-entry">
          {props.room}
        </p>
        <p id="type" className="info-entry">
          {props.type}
        </p>
        <p id="language" className="info-entry">
          {props.language}
        </p>
      </div>
    </div>
  );
};

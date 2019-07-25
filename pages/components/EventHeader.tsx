const EventHeader = props => {
  return (
    <div id="event-header" className="content">
      <hr />
      <p>
        {props.eventTime} {props.eventName}
      </p>
    </div>
  );
};

export default EventHeader;

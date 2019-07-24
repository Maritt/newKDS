const EventHeader = props => {
  return (
    <div className="event-header">
      <p className="time">{props.eventTime}</p>
    </div>
  );
};
export default EventHeader;

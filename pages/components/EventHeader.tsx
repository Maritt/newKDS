const EventHeader = props => {
  return (
    <div>
      <h3>{props.eventHeader}</h3>
      <p>{props.eventTime}</p>
    </div>
  );
};
export default EventHeader;

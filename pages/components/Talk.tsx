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

export default Talk;

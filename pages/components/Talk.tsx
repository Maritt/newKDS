const Talk = props => {
  return (
    <div className="talk-container">
      <h3 id="title">
        <a href="./talksAndSpeakers">{props.title}</a>
      </h3>
      <p id="speaker">
        <a href="./talksAndSpeakers">{props.speaker}</a>
      </p>
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

import "../../styling/styling.scss";
import Link from 'next/link';

const Talk = props => {


  return (
    <div className="talk-container " id={props.id}>
      <h3 id="title">
        <Link href={"./talksAndSpeakers#" + props.talkId}><a>{props.title}</a></Link>

      </h3>
      <p id="speaker">
        <Link href={"./talksAndSpeakers#" + props.talkId}><a>{props.speaker}</a></Link>
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
        <p id="difficulty" className="info-entry">
          {props.difficulty}
        </p>
      </div>
      <div className="speaker-page content">
        <h2 id="talk-speaker"> {props.speaker} </h2>
        <p id="talk-speakerinfo"> {props.speakerInfo} </p>
        <h2 id="talk-title"> {props.title} </h2>
        <p id="talk.description"> {props.description}</p>
        <br />
        <hr />
      </div>
    </div>
  );
};


export default Talk;

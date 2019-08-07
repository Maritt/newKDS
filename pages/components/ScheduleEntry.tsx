import Talk from "./Talk";
import EventHeader from "./EventHeader";
import { Component } from "react";

interface IProps {
  slot: any
}
class ScheduleEntry extends Component<IProps, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content">
        <div className="talk-slot">

          {this.props.slot.rooms.map(room =>
            room.talks.map((talk, i) =>
              <Talk title={talk.title}
                speaker={talk.speaker.name}
                room={room.name}
                type={talk.type}
                language={talk.language}
                difficulty={talk.difficulty}
                talkId={talk.talkId}
                key={i} />
            ))}
        </div>
      </div>
    );
  }
};
export default ScheduleEntry;

import Talk from "./Talk";
import EventHeader from "./EventHeader";
import { Component } from "react";
import "../../styling/scheduleStyles.scss";


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
        <div className="talk-slot"></div>
        {this.props.slot.rooms.map(room => room.talks
          .map(talk => talk.speakers
            .map(speaker =>
              <Talk title={talk.title}
                speaker={speaker.name}
                room={room.name}
                type={talk.type}
                language={talk.language}
                difficulty={talk.difficulty}
                talkId={talk.talkId} />
            )))}
      </div>
    );
  }
};
export default ScheduleEntry;

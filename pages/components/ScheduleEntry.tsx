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

    if (this.props.slot.rooms) {
      return (
        <div className="content">
          <EventHeader timeStart={this.props.slot.timeStart} timeEnd={this.props.slot.timeEnd} type={this.props.slot.type} />
          <div className="talk-slot">

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
        </div>
      </div>
    );
  }
};
export default ScheduleEntry;

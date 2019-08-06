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

    if (this.props.slot.rooms) {
      return (
        <div className="content">
          <EventHeader timeStart={this.props.slot.timeStart} timeEnd={this.props.slot.timeEnd} type={this.props.slot.type} />
          <div className="talk-slot">

            {this.props.slot.rooms.map(room =>
              room.talks.map(talk =>
                <Talk title={talk.title}
                  speaker={talk.speaker.name}
                  room={room.name}
                  type={talk.type}
                  language={talk.language}
                  difficulty={talk.difficulty} />
              ))}
          </div>
        </div>
      );
    } else {
      //for slots that dont have talks, such as lunch, only the header should be displayed
      return (<div className="content">
        <EventHeader timeStart={this.props.slot.timeStart} timeEnd={this.props.slot.timeEnd} type={this.props.slot.type} />
      </div>);
    }
  }
};
export default ScheduleEntry;

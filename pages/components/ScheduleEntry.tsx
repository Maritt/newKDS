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
              <Talk title={room.talks[0].title}
                speaker={room.talks[0].speaker.name}
                room={room.name}
                type={room.talks[0].type}
                language={room.talks[0].language}
                difficulty={room.talks[0].difficulty} />
            )}
          </div>
        </div>
      );
    } else {
      return (<div className="content">
        <EventHeader timeStart={this.props.slot.timeStart} timeEnd={this.props.slot.timeEnd} type={this.props.slot.type} />
      </div>);
    }
  }
};
export default ScheduleEntry;

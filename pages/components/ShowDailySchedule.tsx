import ScheduleEntry from "./ScheduleEntry";
import DayButton from './DayButton';

const ShowDailySchedule = props => {

  return (
    <div>
      <DayButton arrow="../../static/arrow_down.svg" day={props.day} showSchedule={props.showSchedule} />

      {props.slots.map(slot =>
        <ScheduleEntry slot={slot} />
      )}


    </div>
  );
};

export default ShowDailySchedule;

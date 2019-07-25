import ScheduleEntry from "./ScheduleEntry";
import EventHeader from "./EventHeader";
import { loadGetInitialProps } from "next-server/dist/lib/utils";

const ShowDailySchedule = props => {
  if (props.day == "Fredag") {
    return (
      <div>
        <button
          className="day-button"
          type="submit"
          onClick={props.showSchedule}
        >
          <h2>FRIDAY , 12th</h2>
          <div className="right-arrow">
            <img
              className="baseline-chevron"
              src="../../static/arrow_down.svg"
            />
          </div>
        </button>

        {props.slots.map(slot =>
          <ScheduleEntry slot={slot} />
        )}


      </div>
    );
  } else {
    return (
      <div>
        <button
          className="day-button"
          type="submit"
          onClick={props.showSchedule}
        >
          <h2>SATURDAY , 13th</h2>
          <div className="right-arrow">
            <img
              className="baseline-chevron"
              src="../../static/arrow_down.svg"
            />
          </div>
        </button>

        {props.slots.map(slot =>
          <ScheduleEntry slot={slot} />
        )}
      </div>
    );
  }
};

export default ShowDailySchedule;

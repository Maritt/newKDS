const Day = props => {
  return (
    <button className="day-button" type="submit" onClick={showSchedule}>
      <h2>{props.day}</h2>
      <img
        id="baseline-chevron"
        src="../../static/baseline-chevron_right.svg"
      />
    </button>
  );
};

function showSchedule() {
  console.log("heihei");
}

export default Day;

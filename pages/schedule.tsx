import { Component } from "react";
import Layout from "./components/Layout";
import "../styling/headerStyles.scss";
import "../styling/scheduleStyles.scss";
import "../styling/styling.scss";
import Day from "./components/Day";
import { program as Program } from "../models/data.json";

class Schedule extends Component {

  
  render() {
    return (
      <Layout>
        <h1>Schedule</h1>   

        {Program.days.map(day => 
          <Day currDay={day.day} slots={day.slots} />
        )}
      </Layout>
    );
  }
}

export default Schedule

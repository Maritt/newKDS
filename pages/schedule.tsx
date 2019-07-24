import Layout from "./components/Layout";
import "../styling/headerStyles.scss";
import "../styling/scheduleStyles.scss";
import "../styling/styling.scss";
import Day from "./components/Day";
export default function Schedule() {
  return (
    <Layout>
      <h1>Schedule</h1>
      <Day day="FRIDAY , 12th" />
      <Day day="SATURDAY , 13th" />
    </Layout>
  );
}

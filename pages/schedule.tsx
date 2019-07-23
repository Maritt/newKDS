import Layout from "./components/Layout";
import "../styling/headerStyles.scss";
import "../styling/scheduleStyles.scss";
import "../styling/styling.scss";
import ScheduleEntry from "./components/ScheduleEntry";
export default function Schedule() {
  return (
    <Layout>
      <ScheduleEntry />
    </Layout>
  );
}

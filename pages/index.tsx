import Layout from "./components/Layout";
import "../styling/styles.scss";

export default function Home() {
  return (
    <Layout>
      <div className="header">
        <img src="../static/KDSsymbol.svg" />
        <h2>
          Knowit <br /> Developer <br /> Summit
        </h2>
      </div>
    </Layout>
  );
}

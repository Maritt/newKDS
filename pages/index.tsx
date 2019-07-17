import Layout from "./components/Layout";
import "../styling/styles.scss";

export default function Home() {
  return (
    <Layout>
      <div>
        <img src="../static/KDSsymbol.svg" />
        <div>
          <h2>By developers, For Developers</h2>
          <h3>12. - 13. April 2019 Stockholm</h3>
          <h5>
            Feel free to <a href="mailto:kds@knowit.no">contact us.</a>
          </h5>
        </div>
        <div>
          <p>
            Knowit Developer Summit (KDS) is Knowit's annual company-wide
            software developer conference. The 2019 conference will be held on
            Friday, 12th - Saturday, 13th April 2019 at the Stockholm Waterfront
            Hotel in Stockholm, Sweden.
          </p>
        </div>
      </div>
    </Layout>
  );
}

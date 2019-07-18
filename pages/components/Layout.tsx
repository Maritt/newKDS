import Menu from "./Menu";

const Layout = props => (
  <div>
    <Menu />
    <div className="header">
      <img id="KDSlogo" src="../static/KDSsymbol.svg" />
      <h2 id="KDSheader">
        Knowit <br /> Developer <br /> Summit
      </h2>
    </div>
    {props.children}
  </div>
);

export default Layout;

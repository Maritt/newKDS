import Menu from "./Menu";
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "3px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Menu />
    {props.children}
  </div>
);

export default Layout;

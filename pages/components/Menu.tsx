import Link from "next/link";

const Menu = () => (
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      <div id="menuButton">
        <span />
        <span />
        <span />
      </div>
      <div id="menu">
        <Link href="/">
          <a className="link">Home</a>
        </Link>
        <Link href="/practicalities">
          <a className="link">Practical information</a>
        </Link>
        <Link href="/schedule">
          <a className="link">Schedule</a>
        </Link>
        <Link href="/talksAndSpeakers">
          <a className="link">Talks and speakers</a>
        </Link>
        <Link href="/location">
          <a className="link">Location</a>
        </Link>
        <Link href="/codeOfConduct">
          <a className="link">Code of Conduct</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Menu;

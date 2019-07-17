import Link from "next/link";

const Menu = () => (
  <div className="mobileMenu">
    <input type="image" src="../static/menusymbol.svg" className="burgerMenu" />
    <nav className="menu">
      <Link href="/">
        <a className="menu__link">Home</a>
      </Link>
      <Link href="/practicalities">
        <a className="menu__link">Practical information</a>
      </Link>
      <Link href="/schedule">
        <a className="menu__link">Schedule</a>
      </Link>
      <Link href="/talksAndSpeakers">
        <a className="menu__link">Talks and speakers</a>
      </Link>
      <Link href="/location">
        <a className="menu__link">Location</a>
      </Link>
      <Link href="/codeOfConduct">
        <a className="menu__link">Code of Conduct</a>
      </Link>
    </nav>
  </div>
);

export default Menu;

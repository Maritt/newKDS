import Link from "next/link";

const Header = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/practicalities">
      <a>Practical information</a>
    </Link>
    <Link href="/schedule">
      <a>Schedule</a>
    </Link>
    <Link href="/talksAndSpeakers">
      <a>Talks and speakers</a>
    </Link>
    <Link href="/location">
      <a>Location</a>
    </Link>
    <Link href="/codeOfConduct">
      <a>Code of Conduct</a>
    </Link>
  </nav>
);

export default Header;

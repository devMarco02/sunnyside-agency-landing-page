import {
  Logo,
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
} from "../components/Icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />

      <nav className="footer__nav">
        <a className="footer__nav-link" href="/">
          About
        </a>
        <a className="footer__nav-link" href="/">
          Services
        </a>
        <a className="footer__nav-link" href="/">
          Projects
        </a>
      </nav>

      <ul className="footer__list">
        <li className="footer__item">
          <a href="/" className="footer__link">
            <Facebook />
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer__link">
            <Instagram />
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer__link">
            <Twitter />
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer__link">
            <Pinterest />
          </a>
        </li>
      </ul>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://devmarco02.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          devMarco
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;

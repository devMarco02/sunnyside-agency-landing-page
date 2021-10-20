import { Logo, Hamburger } from "../components/Icons";
import { useState } from "react";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <Logo />

      <ul className={isActive ? "header__list active" : "header__list"}>
        <li className="header__item">
          <a href="/" className="header__link">
            About
          </a>
        </li>
        <li className="header__item">
          <a href="/" className="header__link">
            Services
          </a>
        </li>
        <li className="header__item">
          <a href="/" className="header__link">
            Projects
          </a>
        </li>
        <li className="header__item">
          <button className="header__contact-btn">Contact</button>
        </li>
      </ul>

      <button className="header__btn" onClick={() => setIsActive(!isActive)}>
        <Hamburger />
      </button>
    </header>
  );
};

export default Nav;

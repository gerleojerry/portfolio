import React from "react";
import { useState, useRef } from "react";
import "./Navigation.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navigation() {
  const [open, setOpen] = useState(false);
  let nav = useRef();
  return (
    <>
      <nav className="navigation">
        <div className="logo">JEREMIAH</div>

        <ul className="nav__items" ref={nav}>
          <li className="header__nav__item">
            {" "}
            <a href="#home"> Home </a>{" "}
          </li>
          <li className="header__nav__item">
            {" "}
            <a href="#about"> About me </a>{" "}
          </li>
          <li className="header__nav__item">
            {" "}
            <a href="#projects"> Projects </a>{" "}
          </li>
          <li className="header__nav__item">
            {" "}
            <a href="#contact"> Contact </a>{" "}
          </li>
        </ul>

        <div className="burger">
          {open ? (
            <ImCross
              className="nav__icons"
              size={20}
              onClick={() => {
                setOpen(!open);
                nav.current.classList.add("close");
                nav.current.classList.remove("open");
              }}
            />
          ) : (
            <GiHamburgerMenu
              className="nav__icons"
              size={25}
              onClick={() => {
                setOpen(!open);
                nav.current.classList.add("open");
                nav.current.classList.remove("close");
              }}
            />
          )}
        </div>
      </nav>
      ;
    </>
  );
}

export default Navigation;

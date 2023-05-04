import React from "react";
import "./header.css";
import Navigation from "./../Navigation/Navigation.js";
import { AiOutlineCloudDownload, AiFillGithub } from "react-icons/ai";
import { BiDownArrowCircle } from "react-icons/bi";
import { FaGoogle, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
function Header() {
  return (
    <header>
      <div id="home" className="header">
        <Navigation />
        {/* THIS IS THE LEFT SIDE OF THE HEADER  */}
        <div className="header__left">
          <div className="header__left__content">
            <h2 className="header__title">JEREMIAH OLUBORODE</h2>
            <h1 className="header__subtitle "> WEB DEVELOPER. </h1>

            <div className="header__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad totam
              dolores, perferendis ex commodi ullam corrupti eaque. Quis quas,
              maiores, officiis labore illo vel numquam eveniet impedit veniam,
              optio fuga.
            </div>

            {/* THE CTA SECTION  */}
            <div className="header__cta">
              <a
                className="header__cv header__link"
                href="documents/web_cv.pdf"
              >
                {" "}
                <AiOutlineCloudDownload
                  className="header__cta__icon"
                  size={20}
                />{" "}
                Download CV
              </a>

              <a className="header__projects header__link" href="#projects">
                {" "}
                <BiDownArrowCircle
                  size={20}
                  className="header__cta__icon"
                />{" "}
                Projects
              </a>
            </div>

            {/* SOCIAL MEDIA SECTION  */}
            <div className="header__social">
              <a className="header__social__link" href="https://gmail.com">
                {" "}
                <div className="header__social__icon header__social__facebook">
                  {" "}
                  <FaFacebook color="white" size={20} />{" "}
                </div>{" "}
              </a>

              <a className="header__social__link" href="https://gmail.com">
                {" "}
                <div className="header__social__icon header__social__github">
                  {" "}
                  <AiFillGithub color="white" size={20} />{" "}
                </div>{" "}
              </a>

              <a className="header__social__link" href="https://gmail.com">
                {" "}
                <div className="header__social__icon header__social__whatsapp">
                  {" "}
                  <FaWhatsapp color="white" size={20} />{" "}
                </div>{" "}
              </a>

              <a className="header__social__link" href="https://gmail.com">
                {" "}
                <div className="header__social__icon header__social__linkedin">
                  {" "}
                  <FaLinkedin color="white" size={20} />{" "}
                </div>{" "}
              </a>

              <a className="header__social__link" href="https://gmail.com">
                {" "}
                <div className="header__social__icon header__social__gmail">
                  {" "}
                  <FaGoogle color="white" size={20} />{" "}
                </div>{" "}
              </a>
            </div>
          </div>
        </div>

        {/* THIS IS THE RIGHT SIDE OF THE HEADER  */}
        <div className="header__right">
          <img
            src="images/image2.jpg"
            alt="pics of me"
            className="header__img"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

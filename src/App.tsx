import React, { useState } from "react";
import "./css/main.scss";

// images
import egg from "./images/mobile/image-transform.jpg";
import redCup from "./images/mobile/image-stand-out.jpg";
import emily from "./images/image-emily.jpg";
import thomas from "./images/image-thomas.jpg";
import jennie from "./images/image-jennie.jpg";
import milk from "./images/mobile/image-gallery-milkbottles.jpg";
import halfOrange from "./images/mobile/image-gallery-orange.jpg";
import cone from "./images/mobile/image-gallery-cone.jpg";
import sugar from "./images/mobile/image-gallery-sugar-cubes.jpg";
import logo from "./images/logo.svg";
import downArrow from "./images/icon-arrow-down.svg";
import desktopEgg from "./images/desktop/image-transform.jpg";
import desktopRedCup from "./images/desktop/image-stand-out.jpg";
import desktopMilk from "./images/desktop/image-gallery-milkbottles.jpg";
import desktopHalfOrange from "./images/desktop/image-gallery-orange.jpg";
import desktopCone from "./images/desktop/image-gallery-cone.jpg";
import desktopSugar from "./images/desktop/image-gallery-sugarcubes.jpg";

// SVGs
import { ReactComponent as LogoSvg } from "./images/logo.svg";
import { ReactComponent as FacebookIcon } from "./images/icon-facebook.svg";
import { ReactComponent as Instagram } from "./images/icon-instagram.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isMenuOpen, setIsMenuOpenCount] = useState(false);

  const bgSize = "1050w";

  const openMenu = (
    isMenuOpen: boolean,
    setIsMenuOpenCount: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsMenuOpenCount(!isMenuOpen);
  };
  return (
    <>
      <header className="header">
        <article className="header__logo-menu-icon">
          <a href="#root">
            <LogoSvg className="header__logo" />
          </a>
          <FontAwesomeIcon
            icon={faBars}
            className="header__menu-icon"
            onClick={() => openMenu(isMenuOpen, setIsMenuOpenCount)}
          />
        </article>
        <nav className={` ${isMenuOpen ? "header__nav-open" : ""} header__nav`}>
          <a href="#root" className="header__nav-link">
            About
          </a>
          <a href="#root" className="header__nav-link">
            Services
          </a>
          <a href="#root" className="header__nav-link">
            Projects
          </a>
          <a href="#root" className="header__nav-link header__nav-link-contact">
            CONTACT
          </a>
        </nav>
        <div className="header__heading">
          <h1 className="header__heading-title">WE ARE CREATIVES</h1>
          <img
            src={downArrow}
            alt="Down arrow"
            className="header__heading-down-arrow"
          />
        </div>
      </header>
      <main>
        <article className="transform-stand-out transform">
          <img
            src={egg}
            srcSet={`${desktopEgg} ${bgSize}`}
            alt="White egg on yellow background"
            className="transform-stand-out__img transform__img"
          />

          <div className="transform-stand-out__text transform__text">
            <h2 className="transform-stand-out__title">Transform your brand</h2>
            <p className="transform-stand-out__message">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a
              href="#root"
              className="transform-stand-out__learn-more transform-stand-out__learn-more-transform"
            >
              LEARN MORE
            </a>
          </div>
        </article>

        <article className="transform-stand-out stand-out">
          <img
            src={redCup}
            srcSet={`${desktopRedCup} ${bgSize}`}
            alt="Red cup on orange background"
            className="transform-stand-out__img stand-out__img"
          />
          <div className="transform-stand-out__text stand-out__text">
            <h2 className="transform-stand-out__title">
              Stand out to the right audience
            </h2>
            <p className="transform-stand-out__message">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <a
              href="#root"
              className="transform-stand-out__learn-more transform-stand-out__learn-more-stand-out"
            >
              LEARN MORE
            </a>
          </div>
        </article>

        <div className="graphic-design-photography__layout">
          <article className="graphic-design-photography graphic-design ">
            <div className="graphic-design-photography__text">
              <h2 className="graphic-design-photography__title graphic-design__title">
                Graphic Design
              </h2>
              <p className="graphic-design__message graphic-design-photography__message">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </article>
          <article className="graphic-design-photography photography">
            <div className="graphic-design-photography__text">
              <h2 className="graphic-design-photography__title photography__title">
                Photography
              </h2>
              <p
                className="graphic-design-photography__message
              photography__message"
              >
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </article>
        </div>

        <article className="testimonials ">
          <h2 className="testimonials__title">CLIENT TESTIMONIALS</h2>
          <article>
            <img
              src={emily}
              alt="Emily R. portrage"
              className="testimonials__img"
            />
            <p className="testimonials__message">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>

            <h3 className="testimonials__name">Emily R.</h3>
            <h4 className="testimonials__profession">Marketing Director</h4>
          </article>
          <article>
            <img
              src={thomas}
              alt="Thomas S. portrage"
              className="testimonials__img"
            />
            <p className="testimonials__message">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>

            <h3 className="testimonials__name">Thomas S.</h3>
            <h4 className="testimonials__profession">Chief Operating Office</h4>
          </article>
          <article>
            <img
              src={jennie}
              alt="Jennie F. portrage"
              className="testimonials__img"
            />
            <p className="testimonials__message">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>

            <h3 className="testimonials__name">Jennie F.</h3>
            <h4 className="testimonials__profession testimonials__profession--last">
              Business Owner
            </h4>
          </article>
        </article>

        <article className="gallery">
          <img
            src={milk}
            srcSet={`${desktopMilk} ${bgSize}`}
            alt="Milk bottles"
            className="gallery__milk"
          />
          <img
            src={halfOrange}
            srcSet={`${desktopHalfOrange} ${bgSize}`}
            alt="Orange"
            className="gallery__orange"
          />
          <img
            src={cone}
            srcSet={`${desktopCone} ${bgSize}`}
            alt="Ice cream cone"
            className="gallery__cone"
          />
          <img
            src={sugar}
            srcSet={`${desktopSugar} ${bgSize}`}
            alt="Sugar cubes"
            className="gallery__sugar"
          />
        </article>
      </main>

      <footer className="footer">
        <LogoSvg className="footer__logo" />
        <nav className="footer__nav">
          <a href="#root" className="footer__nav-link">
            About
          </a>
          <a href="#root" className="footer__nav-link">
            Services
          </a>
          <a href="#root" className="footer__nav-link">
            Projects
          </a>
        </nav>
        <article className="footer__social-media">
          <a href="#root" className="footer__social-media-links">
            <FacebookIcon className="facebook footer__facebook-icon footer__social-media-links" />
          </a>
          <a href="#root">
            {/* <FontAwesomeIcon
              icon={faTwitter}
              className="twitter footer__twitter-icon footer__social-media-links"
            /> */}
            <Twitter className="twitter footer__twitter-icon footer__social-media-links" />
          </a>
          <a href="#root">
            {/* <FontAwesomeIcon
              icon={faInstagram}
              className="instagram footer__instagram-icon footer__social-media-links"
            /> */}
            <Instagram className="instagram footer__instagram-icon footer__social-media-links" />
          </a>
          <a href="#root">
            {/* <FontAwesomeIcon
              icon={faPinterest}
              className="pinterest footer__pinterest-icon footer__social-media-links"
            /> */}
            <Pinterest className="pinterest footer__pinterest-icon footer__social-media-links" />
          </a>
        </article>
      </footer>
    </>
  );
}

export default App;

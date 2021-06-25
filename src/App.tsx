import React from "react";
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

function App() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <a href="#root" className="header__nav-link">
            About
          </a>
          <a href="#root" className="header__nav-link">
            Services
          </a>
          <a href="#root" className="header__nav-link">
            Projects
          </a>
          <a href="#root" className="header__nav-link">
            CONTACT
          </a>
          <div className="header__title-background">
            <h1 className="header__title">WE ARE CREATIVES</h1>
          </div>
        </nav>
      </header>
      <main className="main">
        <article className="main__transform transform">
          <img src={egg} alt="White egg on yellow background" />
          <div className="transform__text">
            <h2 className="main__title transform__title">
              Transform your brand
            </h2>
            <p className="transform__message">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#root" className="transform__learn-more main__learn-more">
              LEARN MORE
            </a>
          </div>
        </article>

        <article className="main__stand-out stand-out">
          <img src={redCup} alt="Red cup on orange background" />
          <div className="stand-out__text">
            <h2 className="stand-out__title main__title">
              Stand out to the right audience
            </h2>
            <p className="stand-out__message main__message">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <a href="#root" className="stand-out__learn-more main__learn-more">
              LEARN MORE
            </a>
          </div>
        </article>

        <article className="main__graphic-design graphic-design">
          <h2 className="graphic-design__title main__title">Graphic Design</h2>
          <p className="main__message graphic-design__message">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </article>
        <article className="main__photography photography">
          <h2 className="main__title photography__title">Photography</h2>
          <p className="main__message photography__message">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </article>

        <article className="testimonials main__testimonials">
          <h2 className="testimonials__title main__testimonials">
            CLIENT TESTIMONIALS
          </h2>
          <article className="testimonials__individual-testimonial">
            <img
              src={emily}
              alt="Emily R. portrage"
              className="individual-testimonial__img"
            />
            <p className="individual-testimonial__message">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>

            <h3 className="individual-testimonial__name">Emily R.</h3>
            <h4 className="individual-testimonial__profession">
              Marketing Director
            </h4>
          </article>
          <article className="testimonials__individual-testimonial">
            <img
              src={thomas}
              alt="Thomas S. portrage"
              className="individual-testimonial__img"
            />
            <p className="individual-testimonial__message">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>

            <h3 className="individual-testimonial__name">Thomas S.</h3>
            <h4 className="individual-testimonial__profession">
              Chief Operating Office
            </h4>
          </article>
          <article className="testimonials__individual-testimonial">
            <img
              src={jennie}
              alt="Jennie F. portrage"
              className="individual-testimonial__img"
            />
            <p className="individual-testimonial__message">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>

            <h3 className="individual-testimonial__name">Jennie F.</h3>
            <h4 className="individual-testimonial__profession">
              Business Owner
            </h4>
          </article>
        </article>

        <article className="gallery main__gallery">
          <img src={milk} alt="Milk bottles" />
          <img src={halfOrange} alt="Orange" />
          <img src={cone} alt="Ice cream cone" />
          <img src={sugar} alt="Sugar cubes" />
        </article>
      </main>

      <footer className="footer">
        <h2 className="footer__title h2">sunnyside</h2>
        <nav className="footer__nav">
          <a href="#root">About</a>
          <a href="#root">Services</a>
          <a href="#root">Projects</a>
        </nav>
        <article className="footer__social-media-links">
          <a href="#root">
            <FontAwesomeIcon icon={faFacebookF} className="facebook" />
          </a>
          <a href="#root">
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
          </a>
          <a href="#root">
            <FontAwesomeIcon icon={faInstagram} className="instagram" />
          </a>
        </article>
      </footer>
    </>
  );
}

export default App;

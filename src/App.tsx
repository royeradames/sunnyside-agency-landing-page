import React from "react";
import "./css/main.scss";

// images
import egg from "./image/egg.png";

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
        <div className="main__message">
          <div className="main__transform">
            <h2 className="h2 transform__title">Transform your brand</h2>
            <p className="transform__message">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#root" className="transform__learn-more main__learn-more">
              LEARN MORE
            </a>
          </div>
          <img src={egg} alt="White egg on yellow background" />
          <div className="main__transform">
            <h2 className="h2 transform__title">Transform your brand</h2>
            <p className="transform__message">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#root" className="transform__learn-more main__learn-more">
              LEARN MORE
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

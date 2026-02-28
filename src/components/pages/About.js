import React from "react";
import Navbar from "./Navbar";
import "../../styles/about.css";

function About() {
  return (
    <div className="content-page">
      <Navbar />
      <div className="content-wrapper">
        <div className="content-hero">
          <h1>
            About <span className="gradient-text">Cardilla</span>
          </h1>
          <p className="content-hero-sub">
            Revolutionizing credit card bill payments through blockchain
            technology.
          </p>
        </div>

        <div className="content-sections">
          <section className="content-section">
            <h2>Our Mission</h2>
            <p>
              Cardilla is a revolutionary decentralized credit card bill payment
              app designed specifically for crypto users with credit cards. It
              offers a secure and private solution for managing credit cards and
              making bill payments using cryptocurrencies.
            </p>
            <p>
              By leveraging blockchain technology, Cardilla ensures enhanced
              privacy and security by storing user data in a decentralized
              manner. Say goodbye to traditional hassles and hello to seamless
              bill payments using cryptocurrencies.
            </p>
          </section>

          <section className="content-section">
            <h2>What We Offer</h2>
            <div className="content-list">
              <div className="content-list-item">
                <span className="list-icon">🔗</span>
                <span>
                  Decentralized credit card bill payment platform tailored to
                  crypto users
                </span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">🔒</span>
                <span>Secure bill payments using cryptocurrencies</span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">🛡️</span>
                <span>
                  Enhanced privacy through blockchain-based data storage
                </span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">🎁</span>
                <span>
                  Rewards users with digital assets for responsible payment
                  practices
                </span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">🔔</span>
                <span>Decentralized notifications</span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">✨</span>
                <span>User-centric interface</span>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Get in Touch</h2>
            <p>
              With privacy, security, and valuable rewards in mind, Cardilla
              revolutionizes the way crypto users manage their credit cards.
              Experience convenience, transparency, and peace of mind like
              never before. Join us today and take control of your financial
              freedom! 🌟🔒
            </p>
            <a
              href="https://www.linkedin.com/company/cardilla-io/"
              target="_blank"
              rel="noopener noreferrer"
              className="content-link"
            >
              Connect on LinkedIn →
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;

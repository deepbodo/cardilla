import React from "react";
import Navbar from "./Navbar";

function Docs() {
  return (
    <div className="content-page">
      <Navbar />
      <div className="content-wrapper">
        <div className="content-hero">
          <h1>
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="content-hero-sub">
            Learn how Cardilla works and how to get started.
          </p>
        </div>

        <div className="content-sections">
          <section className="content-section">
            <h2>Getting Started</h2>
            <p>
              Cardilla is a revolutionary decentralized credit card bill
              payment app designed specifically for crypto users with credit
              cards. It offers a secure and private solution for managing
              credit cards and making bill payments using cryptocurrencies.
            </p>
          </section>

          <section className="content-section">
            <h2>How It Works</h2>
            <div className="content-list">
              <div className="content-list-item">
                <span className="list-icon">1️⃣</span>
                <span>
                  Create your account and connect your crypto wallet
                </span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">2️⃣</span>
                <span>
                  Add your credit card details securely on blockchain
                </span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">3️⃣</span>
                <span>
                  Add pending bills and choose your cryptocurrency
                </span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">4️⃣</span>
                <span>
                  Pay your bills and earn digital asset rewards
                </span>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Key Features</h2>
            <div className="content-list">
              <div className="content-list-item">
                <span className="list-icon">🔗</span>
                <span>Decentralized credit card bill payment platform</span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">🔒</span>
                <span>Secure bill payments using cryptocurrencies</span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">🛡️</span>
                <span>Enhanced privacy through blockchain-based data storage</span>
              </div>
              <div className="content-list-item">
                <span className="list-icon">🎁</span>
                <span>Rewards for responsible payment practices</span>
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
            <h2>Support</h2>
            <p>
              Experience convenience, transparency, and peace of mind like
              never before. Join us today and take control of your financial
              freedom!
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

export default Docs;

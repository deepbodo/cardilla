import React from "react";
import Navbar from "./Navbar";

function Features() {
  return (
    <div className="content-page">
      <Navbar />
      <div className="content-wrapper">
        <div className="content-hero">
          <h1>
            <span className="gradient-text">Features</span>
          </h1>
          <p className="content-hero-sub">
            Everything you need to manage your credit card bills with crypto.
          </p>
        </div>

        <div className="features-showcase">
          <div className="showcase-card">
            <div className="showcase-icon">🔗</div>
            <h3>Decentralized Payments</h3>
            <p>
              Pay credit card bills directly with cryptocurrency. No
              intermediaries, no delays.
            </p>
          </div>
          <div className="showcase-card">
            <div className="showcase-icon">🔒</div>
            <h3>Blockchain Security</h3>
            <p>
              Your data is stored securely on blockchain. Enhanced privacy
              through decentralization.
            </p>
          </div>
          <div className="showcase-card">
            <div className="showcase-icon">💰</div>
            <h3>Multi-Crypto Support</h3>
            <p>
              Pay with Bitcoin, Ethereum, MATIC, USDT, and more. Choose your
              preferred cryptocurrency.
            </p>
          </div>
          <div className="showcase-card">
            <div className="showcase-icon">🎁</div>
            <h3>Earn Rewards</h3>
            <p>
              Get digital asset rewards for responsible and timely bill
              payments.
            </p>
          </div>
          <div className="showcase-card">
            <div className="showcase-icon">🔔</div>
            <h3>Smart Notifications</h3>
            <p>
              Decentralized notifications for due dates, payment
              confirmations, and alerts.
            </p>
          </div>
          <div className="showcase-card">
            <div className="showcase-icon">⚡</div>
            <h3>Instant Settlements</h3>
            <p>
              Lightning-fast transactions powered by blockchain for instant
              bill clearing.
            </p>
          </div>
          <div className="showcase-card">
            <div className="showcase-icon">✨</div>
            <h3>User-Centric Design</h3>
            <p>
              Seamless interface designed for both crypto natives and
              newcomers alike.
            </p>
          </div>
          <div className="showcase-card">
            <div className="showcase-icon">🌐</div>
            <h3>Global Access</h3>
            <p>
              Pay bills from anywhere in the world. No geographic restrictions,
              complete freedom.
            </p>
          </div>
        </div>

        <div className="content-sections">
          <section className="content-section" style={{ textAlign: "center" }}>
            <p>
              Say goodbye to traditional hassles and hello to seamless bill
              payments using cryptocurrencies. With privacy, security, and
              valuable rewards in mind, Cardilla revolutionizes the way crypto
              users manage their credit cards.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Features;

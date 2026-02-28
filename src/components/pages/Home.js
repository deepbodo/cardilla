// Home Page
import React from "react";
import Navbar from "./Navbar";
import Main from "../Main";

function Home() {
  return (
    <>
      <Navbar />
      <Main />

      {/* Features Section */}
      <section className="home-features" id="features">
        <div className="home-section-container">
          <h2 className="section-title">
            Why <span className="gradient-text">Cardilla</span>?
          </h2>
          <p className="section-subtitle">
            A revolutionary decentralized credit card bill payment platform
            built for the crypto generation.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Decentralized Payments</h3>
              <p>
                Pay credit card bills directly with cryptocurrency, no
                intermediaries needed.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Blockchain Security</h3>
              <p>
                Your data is stored on-chain with enhanced privacy and
                end-to-end encryption.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <h3>Earn Rewards</h3>
              <p>
                Get digital asset rewards for responsible and timely bill
                payment practices.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Smart Notifications</h3>
              <p>
                Decentralized notifications keep you updated on due dates and
                payment confirmations.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Settlements</h3>
              <p>
                Lightning-fast transactions powered by blockchain technology
                for instant bill clearing.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Multi-Crypto Support</h3>
              <p>
                Pay with Bitcoin, Ethereum, MATIC, USDT, and more
                cryptocurrencies of your choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="home-section-container">
          <div className="cta-card">
            <h2>Ready to revolutionize your payments?</h2>
            <p>
              Join Cardilla today and take control of your financial freedom.
              Experience convenience, transparency, and peace of mind.
            </p>
            <div className="cta-actions">
              <a
                href="https://www.linkedin.com/company/cardilla-io/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-primary"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-section-container">
          <div className="footer-content">
            <span className="footer-brand">💳 Cardilla</span>
            <span className="footer-copy">
              © 2024 Cardilla. Decentralized bill payments.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;

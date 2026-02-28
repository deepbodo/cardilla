// Home Page
import React from "react";
import Navbar from "./Navbar";
import Main from "../Main";
function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="container" style={{ marginTop: "2rem" }}>
        <h1>Welcome to Cardilla</h1>
        <p>
          Cardilla is a revolutionary decentralized credit card bill payment app
          designed specifically for crypto users with credit cards. It offers a
          secure and private solution for managing credit cards and making bill
          payments using cryptocurrencies. By leveraging blockchain technology,
          Cardilla ensures enhanced privacy and security by storing user data in
          a decentralized manner.
        </p>
        <ul>
          <li>
            Decentralized credit card bill payment platform tailored to crypto
            users
          </li>
          <li>Secure bill payments using cryptocurrencies</li>
          <li>Enhanced privacy through blockchain-based data storage</li>
          <li>
            Rewards users with digital assets for responsible payment practices
          </li>
          <li>Decentralized notifications</li>
          <li>User-centric interface</li>
        </ul>
        <p>
          Say goodbye to traditional hassles and hello to seamless bill payments
          using cryptocurrencies. With privacy, security, and valuable rewards
          in mind, Cardilla revolutionizes the way crypto users manage their
          credit cards. Experience convenience, transparency, and peace of mind
          like never before. Join us today and take control of your financial
          freedom! 🌟🔒
        </p>
        <p>
          Connect with us on LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/company/cardilla-io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cardilla LinkedIn
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;

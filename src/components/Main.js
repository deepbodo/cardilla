import "../styles/main.css";

export default function Main() {
  return (
    <div>
      <main>
        <div className="main-container">
          <div className="main-content">
            <h1>Cardilla</h1>
            <p>
              Pay your credit card bills seamlessly with cryptocurrency.
              Decentralized, secure, and hassle-free.
            </p>
            <nav className="socials">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/twitter.png`}
                  alt="Twitter"
                />
              </a>
              <a
                href="https://github.com/Shyam-12/cardilla.io"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/github.png`}
                  alt="GitHub"
                />
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                title="Discord"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/discord.png`}
                  alt="Discord"
                />
              </a>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

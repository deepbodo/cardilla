// import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    console.log("logout");
    logout();
  };

  return (
    <div className="nav-container">
      <div className="header">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-icon">💳</span>
          Cardilla
        </Link>
        <div className="details">
          <ul className="navbar-items">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/features">
              <li>Features</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/docs">
              <li>Docs</li>
            </Link>
          </ul>
        </div>
        {user && (
          <div className="user-login">
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!user && (
          <div className="user-login">
            <Link to="/login">
              <button className="reg-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="reg-btn">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
